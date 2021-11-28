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
