//We are trying to import the info from the peoples file into the modules file see below for how to do so.

// const xyz = require('./people'); //using (./) gets in the file in the current folder we are working in which is the Learn folder.
// to be able to log in the info on the referenced file we must have used console.log on that file for it to work.

//--------------
// console.log(xyz)// if we trying to console.log any info on this particular file it will return an empty object because theres nothing tangible on this page yet.

// To make this current page not be an empty object, we must manually export the information using modules.export in the other file that has the info.(people.js)


//------------------
// 1. Exporting more than one item.
// console.log(xyz.people, xyz.ages);

//2. Another wayof grabbing info using destructioning...

// const {people} = require('./people')// this is for one info at a time.
const {people, ages} = require('./people'); // this is for two or more info's at a time.

console.log(people, ages)
// If you don't use module.export in the people.js file using the const {} = require would not work.

const os = require('os');
console.log(os.platform(), os.homedir())// This is usefule if you need to find out information about the operating system.