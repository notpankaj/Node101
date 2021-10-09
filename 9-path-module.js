const path = require('path');

//---------------------------------- 

// platform specfic seprator 
//eg. \  -OR-  / 
console.log(path.sep);

//---------------------------------- 

const filePath = path.join('/content','subfolder','text.txt');
//joins the path by given delimeters and return a normalized path 
//eg. \content\subfolder\text.txt -OR- /content/subfolder/text.txt

console.log(filePath);


//---------------------------------- 
//return only the last delemiter or last postion of  normailzed path

//getting filename
const base = path.basename(filePath);
console.log(`this is: ${base}`)


//---------------------------------- 
const absolutePath = path.resolve(__dirname,'/content','subfolder','text.txt');

//return the absolute path (normalized path) of given delimeters 
//eg. D:\content\subfolder\text.txt -OR- D:/content/subfolder/text.txt

console.log(absolutePath);


