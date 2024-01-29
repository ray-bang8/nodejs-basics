import path from "path";
import { fileURLToPath } from "url";
import { isFileExist } from "./utils/checker.js";
import { writeIntoFile } from "./utils/fileWriter.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
  const filePath = path.join(__dirname, "files", "fresh.txt");
  const fileContent = "I am fresh and young";

  try {
    const isFileAlreadyExist = await isFileExist(filePath);

    if (isFileAlreadyExist) {
      throw new Error("Error: FS operation failed");
    }

    await writeIntoFile(filePath, fileContent);
  } catch (error) {
    console.log(error.message);
  }
};

await create();
