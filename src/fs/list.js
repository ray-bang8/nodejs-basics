import path from "path";
import { fileURLToPath } from "url";
import { isFileExist } from "./utils/checker.js";
import fs from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
  const folderName = path.join(__dirname, "files");

  try {
    const isFolderExist = await isFileExist(folderName);

    if (!isFolderExist) {
      throw new Error("Error: FS operation failed");
    }

    const files = await fs.readdir(folderName);

    files.forEach((filename) => {
      console.log(filename);
    });
  } catch (error) {
    console.log(error.message);
  }
};

await list();
