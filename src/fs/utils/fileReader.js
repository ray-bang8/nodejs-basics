import { createRequire } from "module";
const require = createRequire(import.meta.url);
const fs = require("fs");

export const fileReader = (filePath) => {
  return new Promise((res, rej) => {
    fs.readFile(filePath, { encoding: "utf8" }, (err, data) => {
      if (err) {
        rej(err);
      } else {
        res(data);
      }
    });
  });
};
