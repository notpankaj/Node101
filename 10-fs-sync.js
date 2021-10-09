console.clear()


const { readFileSync, writeFileSync } = require("fs");



console.log('START READING');

// get content of file
const first = readFileSync('./content/first.txt','utf-8'); //utf-8 was default ,so we can also skip that parameter
const second = readFileSync('./content/second.txt','utf-8'); 

console.log(first);
console.log(second);

console.log('END READING');
// -------------
// create file at the give path and if we are passing "content" it will override previous "content".
//if there is not file node will create file and write on it

// writeFileSync('./content/result-sync.txt',`Here is the result : first = ${first} , second = ${second}`);
// writeFileSync('./content/result-sync.txt',`yo`);  //will overwrite

console.log('START WRITING');
//PREVENT OVERWRITING 
//for this we have to pass a flag in obj
writeFileSync('./content/result-sync.txt',`GACHOC GACHO`, { flag: 'a'} );  //will append

console.log('END WRITING');



console.log('DOING OTHER TASK')
