// The Vacuum's Alibi: One Line, 200 Characters
// Writes exactly one line — a robot vacuum's deadpan excuse for missing
// a spot — to /output/entry.txt. Pure Node.js stdlib, deterministic.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Spot missed. My sensors detected a cat asleep on it, and company policy forbids waking a cat. I filed a report. The cat has not.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`Line must be 1-200 characters, got ${LINE.length}`);
}
if (!LINE.trim()) {
  throw new Error("Line must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
