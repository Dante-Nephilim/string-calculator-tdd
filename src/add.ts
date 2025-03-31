export function add(input: string): number {
  if (input.length === 0) {
    return 0;
  }

  if (input.length === 1) {
    if (Number.isNaN(parseInt(input, 10))) {
      throw new Error("Invalid Number");
    }
    return parseInt(input, 10);
  }

  const delimiters = [",", "\n"];
  if (input.startsWith("//")) {
    delimiters.push(input[2]);
    input = input.slice(4);
  }
  const numbers = input.split(new RegExp(delimiters.join("|")));
  // console.log(numbers);

  let sum = 0;
  numbers.forEach((number) => {
    if (Number.isNaN(parseInt(number, 10))) {
      throw new Error("Invalid Number");
    }
    if (parseInt(number, 10) < 0) {
      throw new Error("negative numbers not allowed " + number);
    }
    sum += parseInt(number, 10);
  });
  // console.log(sum);
  return sum;
}
