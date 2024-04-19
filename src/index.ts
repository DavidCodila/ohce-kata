import * as readline from "node:readline/promises";

import { stdin as input, stdout as output } from "node:process";
import mockStdin from "mock-stdin";
//const stdin = mockStdin.stdin();

const rl = readline.createInterface({ input, output });
var answer: string;
export function main(time: number, name: string) {
  console.log(ohce(time, name));
  nextRoundReadLine(name);
}

async function nextRoundReadLine(name: string) {
  do {
    answer = await rl.question("");
    if (answer === "Stop!") {
      console.log("Adios " + name);
      rl.close();
      return;
    }
    console.log(ohceNextLine(answer));
  } while (true);
}

export function ohce(time: number, name: string): string {
  if (time > 19 || time < 6) return "¡Buenas noches " + name + "!";
  else if (time > 11 && time < 20) {
    return "¡Buenas tardes " + name + "!";
  } else return "¡Buenos días " + name + "!";
}

export function ohceNextLine(word: string): string {
  const wordAsCharArray: Array<string> = word.split("");
  const wordReversed = wordAsCharArray.reverse().join("");
  if (word === wordReversed) {
    return word + "\n¡Bonita palabra!";
  }
  return wordReversed;
}

const userTime = await rl.question("What is the time: ");
const userName = await rl.question("What is your name: ");
main(Number(userTime), userName);
