
const fs = require('fs-extra');
let path = "./new_values.json";
let data, jsonData;
    try {
    if(fs.existsSync(path)) {
    data = fs.readFileSync(path, 'utf8');
    if(data) {
     jsonData = JSON.parse(data);
    if(typeof jsonData === 'object' && jsonData !== null && !Array.isArray(jsonData)) {
    jsonData.Phone = 'Nokia';
    jsonData.TV = 'Samsung';
    fs.writeFileSync(path, JSON.stringify(jsonData));
    } else {
                 throw new Error("Parsed JSON data is not an object");
       }
  } else {
    throw new Error("No data read from the file");
       }
 } else {
      throw new Error("File does not exist");
   }
 } catch (err) {
   console.error(err.message);
 }