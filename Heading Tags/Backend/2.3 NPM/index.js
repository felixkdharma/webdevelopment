// npm i <something> => it stands for npm install <something>.
// var generateName = require("sillyname");

// ini cara menggunakan ECMAScript 6 module
// import generateName from "sillyname"; // import the module
// var sillyName = generateName();
// console.log(`My Name is ${sillyName}.`);

// ini kenapa menggunakan {} karena ada fungsi yang bisa mendapatkan list dan mendapatkan satuan
import { randomSuperhero } from "superheroes"; // import the module
var getSuperhero = randomSuperhero();
console.log(`Now my you can call me ${getSuperhero}.`);
