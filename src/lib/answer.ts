import { knowledge, FALLBACK, type Entry } from "@/data/knowledge";

const STOPWORDS = new Set(
  "a an the is are was were be been am to of in on at for and or me my you your yours u ur do does did can could would will shall i it its this that with about tell what whats how which any have has had so please pls just some also there their them then than from by as if into over ok okay".split(" ")
);

function stem(w: string): string {
  if (w.length > 4 && w.endsWith("ies")) return w.slice(0, -3) + "y";
  if (w.length > 5 && w.endsWith("ing")) return w.slice(0, -3);
  if (w.length > 4 && w.endsWith("ed")) return w.slice(0, -2);
  if (w.length > 4 && w.endsWith("ly")) return w.slice(0, -2);
  if (w.length > 3 && w.endsWith("s") && !w.endsWith("ss")) return w.slice(0, -1);
  return w;
}

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w && !STOPWORDS.has(w))
    .map(stem);
}

function withinOneEdit(a: string, b: string): boolean {
  if (Math.abs(a.length - b.length) > 1) return false;
  let i = 0;
  let j = 0;
  let edits = 0;
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) {
      i++;
      j++;
      continue;
    }
    if (++edits > 1) return false;
    if (a.length > b.length) i++;
    else if (a.length < b.length) j++;
    else {
      i++;
      j++;
    }
  }
  return edits + (a.length - i) + (b.length - j) <= 1;
}

type Indexed = { entry: Entry; keywords: Set<string>; examples: Set<string> };

const index: Indexed[] = knowledge.map((entry) => ({
  entry,
  keywords: new Set(entry.keywords.flatMap(tokenize)),
  examples: new Set(entry.examples.flatMap(tokenize)),
}));

const vocab = new Set<string>();
const docFreq = new Map<string, number>();
for (const { keywords, examples } of index) {
  const all = new Set([...keywords, ...examples]);
  for (const t of all) {
    vocab.add(t);
    docFreq.set(t, (docFreq.get(t) ?? 0) + 1);
  }
}

function idf(token: string): number {
  return Math.log(1 + index.length / (docFreq.get(token) ?? 1));
}

function correct(token: string): string {
  if (vocab.has(token) || token.length < 5) return token;
  for (const v of vocab) if (v.length >= 4 && withinOneEdit(token, v)) return v;
  return token;
}

const MIN_SCORE = 2;
const LOW_PRIORITY = new Set(["greeting", "thanks"]);

export function answer(question: string): { id: string; reply: string } {
  const tokens = [...new Set(tokenize(question).map(correct))];
  if (tokens.length === 0) return { id: "fallback", reply: FALLBACK };

  let best: { entry: Entry; score: number } | null = null;
  for (const { entry, keywords, examples } of index) {
    let score = 0;
    for (const t of tokens) {
      if (keywords.has(t)) score += 3 * idf(t);
      else if (examples.has(t)) score += idf(t);
    }
    if (LOW_PRIORITY.has(entry.id)) score *= 0.6;
    if (!best || score > best.score) best = { entry, score };
  }

  if (!best || best.score < MIN_SCORE) return { id: "fallback", reply: FALLBACK };
  return { id: best.entry.id, reply: best.entry.answer };
}
