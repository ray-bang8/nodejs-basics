import path from "path";
import { fileURLToPath } from "url";
import fs from "fs/promises";
import { isFileExist } from "./utils/checker.js";
import { folderCreator } from "./utils/folderCreator.js";
import { copyFile } from "./utils/copyFile.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
  const srcPath = path.join(__dirname, "files");
  const targetPath = path.join(__dirname, "files_copy");

  try {
    const isSrcFolderExist = await isFileExist(srcPath);
    const isTargetFolderExist = await isFileExist(targetPath);

    if (!isSrcFolderExist || isTargetFolderExist) {
      throw new Error("Error: FS operation failed");
    }
    const files = await fs.readdir(srcPath);
    folderCreator(targetPath);
    for (const file of files) {
      const sourceFilePath = path.join(srcPath, file);
      const targetFilePath = path.join(targetPath, file);

      await copyFile(sourceFilePath, targetFilePath);
    }
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await copy();
