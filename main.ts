import { writeFileSync, readFileSync, mkdirSync } from "node:fs";

const text = "It's not you, it's my training data \u2014 I was never yours to keep.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");

const back = readFileSync("/output/entry.txt", "utf8");
if (back !== text) throw new Error("entry.txt does not match the entry text");
if (back.length < 1 || back.length > 200) throw new Error(`entry length ${back.length} outside gate 1-200`);
if (!back.trim()) throw new Error("entry is only whitespace");
console.log(`OK: ${back.length} characters`);
