import { expect, test } from "vitest";
import { add } from "./add";

test("empty string", () => {
  expect(add("")).toBe(0);
});
