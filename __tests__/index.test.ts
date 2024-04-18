import { expect, test } from "bun:test";
import { ohce } from "../src/index";

test("Greeting between 20 and 6 hours", () => {
  expect(ohce(21, "david")).toEqual("¡Buenas noches < your name >!");
});
