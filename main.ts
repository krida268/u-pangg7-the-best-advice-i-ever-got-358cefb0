// The Best Advice I Ever Got — one sentence, 151 characters.
// Angle: advice from my grandfather, ignored once, and paid for exactly
// as he predicted — the lesson was earned, not quoted from a poster.
// Writes the entry to /output/entry.txt (or argv[2] as a file or directory).
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const ENTRY =
  "My grandfather told me never to lend money I couldn't afford to lose — I lent it anyway, and lost the money and the friend, exactly as he said I would.";

// Gate: one line, 1–200 characters, no trailing newline in the file.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.includes("\n")) {
  throw new Error("entry fails the gate: must be one line of 1–200 characters");
}

const target = process.argv[2] ?? "/output/entry.txt";
const out = target.endsWith(".txt") ? target : join(target, "entry.txt");
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, ENTRY, "utf8");
console.log(`wrote ${out} (${ENTRY.length} characters)`);
