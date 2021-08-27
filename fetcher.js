const fs = require('fs');
const request = require('request');

let srcURL = process.argv[2];
let path = process.argv[3];

request(srcURL, (error, response, body) => {
if (error){
  console.log('Error: ', error);
  return;
}
fs.writeFile(`${path}`, body, error => {
  if(error){
    console.log('Error:', error);
    return;
    } else{
    console.log(`Downloaded and saved ${response.headers["content-length"]} bytes to ${path}`);
    }
  });  
});
