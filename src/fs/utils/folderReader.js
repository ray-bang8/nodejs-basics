import { createRequire } from "module";
const require = createRequire(import.meta.url);
const fs = require("fs");

export const folderReader = (srcPath) => {
  return new Promise((res, rej) => {
    fs.readdir(srcPath, (err) => {
      if (err) {
        rej(err);
      } else {
        res();
      }
    });
  });
};
