import * as readline from "node:readline/promises";

import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

const answer = await rl.question("Write something: ");

console.log("You wrote: " + answer);

rl.close();

export function ohce(time: number, name: string): string {
  if (time > 19 || time < 6) return "¡Buenas noches david!";
  else if (time > 11 && time < 20) {
    return "¡Buenas tardes david!";
  } else return "¡Buenos días david!";
}

export function ohceNextLine(word: string): string {
  const wordAsCharArray: Array<string> = word.split("");
  const wordReversed = wordAsCharArray.reverse().join("");
  if (word === wordReversed) {
    return word + "\n¡Bonita palabra!";
  }
  return wordReversed;
}
