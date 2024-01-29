import { createRequire } from "module";
const require = createRequire(import.meta.url);
const fs = require("fs");

export const fileRenamer = (oldPath, newPath, callback) => {
  return new Promise((resolve, reject) => {
    fs.rename(oldPath, newPath, callback, (err) => {
      if (err) {
        resolve(false);
      } else {
        resolve(true);
      }
    });
  });
};
