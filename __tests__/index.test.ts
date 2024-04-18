import { expect, test } from "bun:test";
import { ohce } from "../src/index";

test("Greeting between 20 and 6 hours", () => {
  expect(ohce(21, "david")).toEqual("¡Buenas noches david!");
});

test("Greeting between 6 and 12 hours", () => {
  expect(ohce(6, "david")).toEqual("¡Buenos días david!");
});
