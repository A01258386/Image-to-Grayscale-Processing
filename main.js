/*
 * Project: Instagram-like photo app
 * File Name: main.js
 * Description:This application can extract the zip file and apply filters to these photos.
 *
 * Created Date:November, 2021
 * Author: Gokce Gokmen
 *
 */

const IOhandler = require("./IOhandler"),
  zipFilePath = `${__dirname}/myfile.zip`,
  pathUnzipped = `${__dirname}/unzipped`,
  pathProcessed = `${__dirname}/grayscaled`,
  path = require("path");




const filter = new Promise((resolve, reject) => {
  IOhandler.unzip(zipFilePath, pathUnzipped)
    .then(() => {
      console.log("unzipped");
      return IOhandler.readDir(pathUnzipped);
    }).then(async (data) => {
      console.log("readDir ./unzipped");
      console.log("RESULT ", data);
      for (let i = 0; i < data.length; i++) {
        IOhandler.grayScale(data[i], pathProcessed)
      }
      const files = [];
      data.forEach(file => {
        files.push(path.basename(file));
      });
      resolve(files);
    }).catch((err) => {
      console.log("error", err);
      reject(err);
    });
});

const express = require("express"),
  app = express(),
  port = process.env.PORT || 3000;
//use ejs
app.set("view engine", "ejs");
app.use("/unzipped", express.static('unzipped'))
app.use("/grayscaled", express.static('grayscaled'))

filter.then((fileNames) => {

  app.get("/", (req, res) => {
    res.render("index", {
      images: fileNames
    });

  });

});



app.listen(port, () => {
  console.log(`listening on port ${port}`);
}
);
