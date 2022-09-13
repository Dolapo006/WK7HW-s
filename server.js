// Creating our own Server!!!
//GET REQUEST
const http = require('http');
const fs = require('fs')
const _ = require('lodash');

const server = http.createServer((req, res) => {
    // console.log(req.url, req.method);// this is to get the part the user visits and the method they used.




    //LODASH
const num = _.random(0, 20);// lodash method to log a random number when the page is refreshed.
console.log(num);

const greet = _.once(() => {//lodash method to log the function only once.
    console.log('hello');
})

greet();
greet();

    //SET header content Type
    res.setHeader('Content-Type', 'text/html');// step 1


    let path = './views/';//This entire section checks if the path the user requested exist if it does one of the following actions will occur.
    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':// the next page we trying ton visit
            path += 'about.html';// the file attached to that page
            res.statusCode = 200;//the code it will show after running the process
            break;
        case '/about-us':// an extra page
            res.statusCode = 301;
            res.setHeader('Location', '/about');// sets the location we trying to go into
            res.end()//ends the response
        default:
            path += '404.html'
            res.statusCode = 404;
            break;
    }

    //Send an HTML file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err)
            res.end();
        } else {
            // res.write(data); we use this line if we are sending multiple things but since we are only using it once, we can do it the another way below..
            
            res.end(data);
        }
    })

})
// The above liner really doesn't do anything yet we still need to add listeners to the event.
server.listen(4000, 'localhost', () => {
    console.log('listening for requests on port 4000')
})
//LOCALHOST
//1. Localhost is like a domain name on web like google.com but it takes us to a loopback ip address which is our own computer.

//PORTNUMBERS
//Portnumbers are like doors into a computer


//--------------STATUS CODES---------------//
// 100 Range = informational responses 
//1. 200 = OKAY
//2. 301 = Resource Moved
//3. 404 = Not found
//4. 500 = Internal server error

//--------------DEPENDENCIES---------------//
//Npm and package.json also allows us to easily share project code.
//If the node_modules file that contains the packages is ever deleted, all we have to do is in the terminal write npm install and it will automatically look in the package.json file and install the necessary dependencies.
//Express is a framework for node that easily helps us create node websites.

//--------------EXPRESS------------------//

//Express is a framework that helps us easily manage a routing, request and response in a more elegant way.