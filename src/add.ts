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

  const delimiters = [",", "\n"];
  if (input.startsWith("//")) {
    delimiters.push(input[2]);
    input = input.slice(4);
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
