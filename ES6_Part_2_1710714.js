//ES6_Part_2.js

//import
const Student = require('./ClassStudent.js');


//readline
const readline = require('readline');
const r1 = readline.createInterface({input: process.stdin,output: process.stdout});

let prompt = question => {
    return new Promise((answer) => {
        r1.question(question, answer);
      });
}

//create object
let B = new Student();

//prompt user
async function ask() {
    B.Name = await prompt("Name: ");
    B.MatricNo = await prompt("Matric No: ");
    B.Major = await prompt("Major: ");

    B.display();
    process.exit();
}

ask();

