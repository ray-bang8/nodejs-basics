import { createRequire } from "module";
const require = createRequire(import.meta.url);
const fs = require("fs");

export const deleteFile = (fileName) => {
  return new Promise((res, rej) => {
    fs.unlink(fileName, (err) => {
      if (err) {
        rej(err);
      } else {
        res();
      }
    });
  });
};
