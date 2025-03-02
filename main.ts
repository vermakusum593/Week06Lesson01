import { writeFileSync } from "node:fs";
import { reverseString, countCharacters, removeAllSpaces } from "./stringUtils";
import { cwd } from "node:process";
import path, { dirname } from "node:path";

const sentence = "Learning Node.js is important for modern web development";

const reversedSentence = reverseString(sentence);
const characterCount = countCharacters(sentence);
const stringWithoutSpaces = removeAllSpaces(sentence);

const jsonContent = { reversedSentence, characterCount, stringWithoutSpaces };

console.log("Original Sentence:", sentence);
console.log("Reversed Sentence:", reversedSentence);
console.log("Character Count (excluding spaces):", characterCount);
console.log("String without spaces:" + stringWithoutSpaces);

const filename = path.join(__dirname, "reversedString.txt");
// File
try {
  writeFileSync(`${cwd()}/result.json`, JSON.stringify(jsonContent));
  writeFileSync(filename, reversedSentence);
  console.log("File path:" + filename);
  // file written successfully
} catch (err) {
  console.error(err);
}

// Run the file using npx tsx ts-filename
