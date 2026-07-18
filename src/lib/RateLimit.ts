import mongoose, { Schema } from "mongoose";

const RateLimitSchema = new Schema({
  ip: { type: String, required: true, unique: true },
  count: { type: Number, default: 1 },
  resetAt: { type: Date, required: true },
});

// Auto-delete expired documents
RateLimitSchema.index({ resetAt: 1 }, { expireAfterSeconds: 0 });

export const RateLimit = mongoose.models.RateLimit || mongoose.model("RateLimit", RateLimitSchema);
