import mongoose, { Schema } from "mongoose";

const ChatLogSchema = new Schema({
  ip: { type: String, default: "unknown" },
  question: { type: String, required: true },
  response: { type: String, required: true },
  latency_ms: { type: Number },
  timestamp: { type: Date, default: Date.now },
});

export const ChatLog = mongoose.models.ChatLog || mongoose.model("ChatLog", ChatLogSchema);
