import fs from "fs";
import path from "path";

export async function loadDictionary(): Promise<Set<string>> {
  const filePath = path.resolve("node_modules/word-list/words.txt");

  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        reject(`Error loading dictionary: ${err.message}`);
        return;
      }
      resolve(
        new Set(data.split("\n").map((word) => word.trim().toLowerCase()))
      );
    });
  });
}
