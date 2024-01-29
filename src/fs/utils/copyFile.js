import { createRequire } from "module";
const require = createRequire(import.meta.url);
const fs = require("fs");

export const copyFile = (sourcePath, targetPath) => {
  return new Promise((res, rej) => {
    fs.copyFile(sourcePath, targetPath, (err) => {
      if (err) {
        rej(err);
      } else {
        res();
      }
    });
  });
};
