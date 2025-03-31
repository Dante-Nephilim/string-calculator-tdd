import { expect, test } from "vitest";

import getDelimiters from "./getDelimiters";

test("empty string", () => {
  expect(getDelimiters("")).toEqual([]);
});

test("single character delimiter", () => {
  expect(getDelimiters(";")).toEqual([";"]);
});

test("EXTRA: single delimiter multi character", () => {
  expect(getDelimiters("[;;;]")).toEqual([";;;"]);
});

test("EXTRA: multiple delimiters with single character", () => {
  expect(getDelimiters("[;][%]")).toEqual([";", "%"]);
});

test("EXTRA: multiple delimiters with multi character", () => {
  expect(getDelimiters("[;;;][%%%]")).toEqual([";;;", "%%%"]);
});
