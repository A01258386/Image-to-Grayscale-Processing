/*
 * Project: Instagram-like photo app
 * File Name: IOhandler.js
 * Description: Collection of functions for files input/output related operations
 *
 * Created Date:November, 2021
 * Author: Gokce Gokmen
 *
 */

const unzipper = require("unzipper"),
  fs = require("fs"),
  PNG = require("pngjs").PNG,
  path = require("path");

/**
 * Description: decompress file from given pathIn, write to given pathOut
 *
 * @param {string} pathIn
 * @param {string} pathOut
 * @return {promise}
 */
//unzip a file using unzipper,after files unzipped,console.log "Extraction operation complete"
const unzip = (pathIn, pathOut) => {
  return new Promise((resolve, reject) => {
    fs.createReadStream(pathIn)
      .pipe(unzipper.Extract({ path: pathOut }))
      .on("close", () => {
        console.log("Extraction operation complete");
        resolve();
      });
  });
};
unzip('myfile.zip', './unzipped')

//create a function an array of file paths for all the png files
const readDir = (dir) => {
  return new Promise((resolve, reject) => {
    fs.readdir(dir, (err, files) => {
      if (err) {
        reject(err);
      } else {
        resolve(files);
        let arr = [];
        files.forEach((file) => {
          if (path.extname(file) === ".png") {
            arr.push(path.join(dir, file));            
          }          
        });
        console.log(arr);
      }
    });
  });
};

readDir("./unzipped")




/**
 * Description: read all the png files from given directory and return Promise containing array of each png file path
 *
 * @param {string} path
 * @return {promise}
 */


/**
 * Description: Read in png file by given pathIn,
 * convert to grayscale and write to given pathOut
 *
 * @param {string} filePath
 * @param {string} pathProcessed
 * @return {promise}
 */
const grayScale = (pathIn, pathOut) => {};

module.exports = {
  unzip,
  readDir,
  grayScale,
};
