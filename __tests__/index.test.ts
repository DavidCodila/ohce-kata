import { expect, test } from "bun:test";
import { ohce } from "../src/index";

test("Greeting at hour 21", () => {
  expect(ohce(21, "david")).toEqual("¡Buenas noches david!");
});

test("Greeting at hour 20", () => {
  expect(ohce(20, "david")).toEqual("¡Buenas noches david!");
});

test("Greeting at hour 6", () => {
  expect(ohce(7, "david")).toEqual("¡Buenos días david!");
});
