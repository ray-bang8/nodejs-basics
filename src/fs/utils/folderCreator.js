import { createRequire } from "module";
const require = createRequire(import.meta.url);
const fs = require("fs");

export const folderCreator = (path, format) => {
  return new Promise((res, rej) => {
    fs.mkdir(path, format, (err) => {
      if (err) {
        rej(err);
      } else {
        res();
      }
    });
  });
};
