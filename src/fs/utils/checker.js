import { createRequire } from "module";
const require = createRequire(import.meta.url);
const fs = require("fs");

export const isFileExist = (pathEl) => {
  return new Promise((resolve, reject) => {
    fs.access(pathEl, fs.constants.F_OK, (err) => {
      if (err) {
        resolve(false);
      } else {
        resolve(true);
      }
    });
  });
};
