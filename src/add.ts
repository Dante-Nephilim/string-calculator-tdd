import getDelimiters from "./getDelimiters";

export function add(input: string): number {
  if (input.length === 0) {
    return 0;
  }

  if (input.length === 1) {
    const number = parseInt(input, 10);
    if (Number.isNaN(number)) {
      throw new Error("Invalid Number");
    }
    return number;
  }

  let delimiters = [",", "\n"];

  if (input.startsWith("//")) {
    let spaceIndex: number = 0;
    for (let i = 0; i < input.length; i++) {
      if (input[i] === "\n") {
        spaceIndex = i;
        break;
      }
    }

    const extraDelimiters = getDelimiters(input.slice(2, spaceIndex));

    delimiters = [...delimiters, ...extraDelimiters];
    input = input.slice(spaceIndex + 1);
  }
  const numbers = input.split(new RegExp(delimiters.join("|")));

  let sum = 0;
  const negativeNumbers: number[] = [];

  numbers.forEach((numberString) => {
    let number = parseInt(numberString, 10);
    if (Number.isNaN(number)) {
      throw new Error("Invalid Number");
    }

    if (number < 0) {
      negativeNumbers.push(number);
    }

    if (number <= 1000) {
      sum += number;
    }
  });

  if (negativeNumbers.length > 0) {
    throw new Error("negative numbers not allowed " + negativeNumbers.join(","));
  }

  return sum;
}
