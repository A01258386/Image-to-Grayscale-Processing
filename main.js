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
  pathProcessed = `${__dirname}/grayscaled`;


  
IOhandler.unzip(zipFilePath, pathUnzipped)
.then(()=>{
  console.log("unzipped");
  return IOhandler.readDir(pathUnzipped);
}).then(async (data)=>{
  console.log("readDir ./unzipped");
  console.log("RESULT ",data);
  for (let i = 0; i < data.length; i++) {
    IOhandler.grayScale(data[i], pathProcessed)
  }
}).catch((err)=>{
  console.log("error",err);
});
    
