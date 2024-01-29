import path from "path";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const fs = require("fs/promises");

import { fileURLToPath } from "url";
import { isFileExist } from "./utils/checker.js";
import { fileReader } from "./utils/fileReader.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  const filePath = path.join(__dirname, "files", "fileToRead.txt");

  try {
    const isFileAlreadyExist = await isFileExist(filePath);

    if (!isFileAlreadyExist) {
      throw new Error("Error: FS operation failed");
    }

    const fileContent = await fileReader(filePath);
    console.log(fileContent);
  } catch (error) {
    console.log(error.message);
  }
};

await read();
