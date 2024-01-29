import crypto from "crypto";
import { fileURLToPath } from "url";
import fs from "fs";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
  const filePath = path.join(__dirname, "files/fileToCalculateHashFor.txt");

  const hash = crypto.createHash("sha256");
  const stream = fs.createReadStream(filePath);
  return new Promise((resolve, reject) => {
    stream.on("data", (data) => {
      hash.update(data);
    });

    stream.on("end", () => {
      const calculatedHash = hash.digest("hex");
      console.log(calculatedHash);
      resolve(calculatedHash);
    });

    stream.on("error", (error) => {
      reject(error);
    });
  });
};

await calculateHash();
