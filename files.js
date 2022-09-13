// const fs = require('fs')// FS is built into node and it stands for filesystem

// const { fs } = require("fs");

//Reading Files
//This is asyncronos meaning it takes some time to do but that does not stop it from running other lines of code see line 12 for example it logs line 12 before it completes the full process of its own action.
// fs.readFile('./docs/blog1.txt', (err, data) => {
// if(err) {
//     console.log(err);
// }
// console.log(data.toString());// first off without .toString it just returns (buffer) but with .toString it returns the string in the file we referenced.
// })

// console.log('last line')

//----------------
//Writing Files
// fs.writeFile('./docs/blog1.txt', 'hello, world', () => {
//     console.log('file was written');
// })

// //This creats a new file for us that didn't exist
// fs.writeFile('./docs/blog2.txt', 'hello, world', () => {
//     console.log('file was written');
// })

//Directories
//creates a new directory
// check to see if the folder already exist.
// if(!fs.existsSync('./assests')) {
// fs.mkdir('./assests', (err) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log('folder created');
// })
// } else { // this will delete the directory if it DOES exist.
//     fs.rmdir('./assests', (err) => {
//         if (err) {
//             console.log(err)
//         }
//         console.log('folder deleted')
//     })
// }
// //Deleting Files
// // check if the files exist first before trying to delete.

// if (fs.existsSync('./docs/deleteme.txt')) {
//     fs.unlink('./docs/deleteme.txt', (err) => {
//         if (err) {
//             console.log(err)
//         }
//         console.log('file deleted');
//     })
// }