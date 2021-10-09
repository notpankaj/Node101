// modules

const names = require('./4-names');
const sayHi = require('./5-utils');
console.log(names);
sayHi('SUSAN');
sayHi(names.jhone);
sayHi(names.peater);



// ------------------------------------------------>
const data =  require('./6-alternative-falvour');
console.log(data)
const { items, singlePerson } =  require('./6-alternative-falvour');
console.log(items)
console.log(singlePerson)
require('./7-minegrnade.js') //require will execute all the function calls present in that file.
