import { createRequire } from "module";
const require = createRequire(import.meta.url);
const fs = require("fs");

export const writeIntoFile = (pathEl, message) => {
  return new Promise((res, rej) => {
    fs.writeFile(pathEl, message, (err) => {
      if (err) {
        rej(err);
      } else {
        res();
      }
    });
  });
};
