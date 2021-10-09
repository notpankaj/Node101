// $ npm --version

// local dependency - use it only in this particular project
// npm i <PackageName>

// Global dependency - use it only any project
// npm i -g <PackageName>




// package.json  //can create manually
// npm init (step by step , press enter to skip);
// npm init -y (everything default);


// how to use

const _ = require('lodash');

const items = [0, [1, [2, [3, [4, [5 ] ] ] ] ] ];
const newItems = _.flattenDeep(items);
console.log(newItems);


// https://github.com/notpankaj/Node101.git