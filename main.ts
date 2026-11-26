// One Word for Your Wi-Fi — entry for make.fun.
// Writes the single word to entry.txt inside the output directory.
// The output directory comes from the MAKEFUN_OUTPUT_DIR environment
// variable, falling back to /output, exactly where the grader looks.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The word: my Wi-Fi shows five full bars, says "Connected", lights
// all green — and loads absolutely nothing. It insists everything is
// fine while reality says otherwise, until I am the one apologising
// to a frozen video call and restarting a router that swears it was
// never broken. That is not a connection, that is a gaslighter
// living in the corner of the room.
// One ordinary, correctly spelled word, instantly readable with no
// pun to decode and no context needed: funny in one beat because
// the lie — full signal, no internet — is the most recognisable
// thing home Wi-Fi does, and it doubles perfectly as a network
// name, since joining it means connecting to the Gaslighter itself.
const WORD = "Gaslighter";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
}

main();
