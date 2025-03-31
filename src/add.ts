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
  return 0;
}
