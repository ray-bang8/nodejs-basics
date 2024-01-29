import path from "path";
import { fileURLToPath } from "url";
import { isFileExist } from "./utils/checker.js";
import { fileRenamer } from "./utils/fileRenamer.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
  const oldFileName = path.join(__dirname, "files", "wrongFilename.txt");

  const newFileName = path.join(__dirname, "files", "properFilename.md");

  try {
    const isOldFileExist = await isFileExist(oldFileName);
    const isNewFileAlreadyExist = await isFileExist(oldFileName);

    if (!isOldFileExist || !isNewFileAlreadyExist) {
      throw new Error("Error: FS operation failed");
    }

    fileRenamer(oldFileName, newFileName, () => {});
  } catch (error) {
    console.log(error.message);
  }
};

await rename();
