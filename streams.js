const fs = require('fs')
//first create a stream that will read the file

const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'});//the second argument automatically prints the referenced file in readable format.

const writeStream = fs.createWriteStream('./docs/blog4.txt');//this line writes a new stream

// readStream.on('data', (chunk) => {// created and started reading the stream
// //(.on) is an event listener we are basically listening to a data even on the (readStream)
// console.log('-------NEW CHUNK------')
// console.log(chunk);// to print it the actual info and not just a buffer add the method (.toString) and you'll get the actual text
// console.log(chunk)// another way to print it to string automatically is by doing it in line 4 passing in another argument which will be an object.
// writeStream.write('\nNEW CHUNK\n');// everytime we get a new piece of data from readStream it will write it into the writeStream
// writeStream.write(chunk);// this places the new chunk into the specified file in line 6
// })// This whole thing take little pieces of read data and writes it into another file without having to wait for the entire data to completely load.

//Piping
//Piping is an easier way to transfer read data into written data look below for how to do so..

readStream.pipe(writeStream);