import { expect, test } from "vitest";
import { add } from "./add";

test("empty string", () => {
  expect(add("")).toBe(0);
});

test("single digit string", () => {
  expect(add("1")).toBe(1);
});

test("single digit NaN", () => {
  expect(() => add("a")).toThrowError("Invalid Number");
});
