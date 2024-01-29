import path from "path";
import { fileURLToPath } from "url";
import { isFileExist } from "./utils/checker.js";
import { deleteFile } from "./utils/deleteFile.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
  const fileName = path.join(__dirname, "files", "fileToRemove.txt");

  try {
    const isFileToDeleteExist = await isFileExist(fileName);

    if (!isFileToDeleteExist) {
      throw new Error("Error: FS operation failed");
    }

    await deleteFile(fileName);
  } catch (error) {
    throw new Error(error.message);
  }
};

await remove();
