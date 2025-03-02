export function reverseString(str: string): string {
  return str.split("").reverse().join("");
}

export function countCharacters(str: string): number {
  return str.length;
}

export function removeAllSpaces(str: string): string {
  return str.replaceAll(" ", "");
}
