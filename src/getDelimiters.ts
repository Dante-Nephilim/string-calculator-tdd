export default function getDelimiters(input: string): string[] {
  const delimiters: string[] = [];
  let currentDelimiterString = "";

  for (let i = 0; i < input.length; i++) {
    if (input[i] === "[") {
      continue;
    }

    if (input[i] === "]") {
      delimiters.push(currentDelimiterString);
      currentDelimiterString = "";
      continue;
    }

    currentDelimiterString = currentDelimiterString + input[i];
  }

  if (currentDelimiterString.length > 0) {
    delimiters.push(currentDelimiterString);
  }

  return delimiters;
}
