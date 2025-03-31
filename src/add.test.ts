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

test("multiple digit string", () => {
  expect(add("1,2,3")).toBe(6);
});

test("multiple digits with NaN", () => {
  expect(() => add("1,a,3")).toThrowError("Invalid Number");
});

test("multiple digits with new line delimiter", () => {
  expect(add("1\n2\n3,4")).toBe(10);
});

test("multiple digits with NaN and new line delimiter", () => {
  expect(() => add("1\na\n3,4")).toThrowError("Invalid Number");
});

test("multiple digits with custom delimiter", () => {
  expect(add("//;\n1;2;3;4")).toBe(10);
});

test("multiple digits with custom delimiter and new line", () => {
  expect(add("//;\n1;2;3\n4")).toBe(10);
});

test("multiple digits with custom delimiter and NaN", () => {
  expect(() => add("//;\n1;2;e\n4")).toThrowError("Invalid Number");
});

test("multiple digits with custom delimiter and negative number", () => {
  expect(() => add("//;\n1;2;-3\n4")).toThrowError("negative numbers not allowed -3");
});

test("single digit with negative number", () => {
  expect(() => add("-1")).toThrowError("negative numbers not allowed -1");
});

test("multiple digits with negative number", () => {
  expect(() => add("-1,2,3")).toThrowError("negative numbers not allowed -1");
});

test("multiple digits with negative number and NaN", () => {
  expect(() => add("-1,a,3")).toThrowError("negative numbers not allowed -1");
});

test("multiple digits with NaN and negative number", () => {
  expect(() => add("a,-1,3")).toThrowError("Invalid Number");
});
