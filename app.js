//THIS IS THE FILE FOR THE EXPRESS APP

const express = require('express')// This returns us a function


//--------EXPRESS APP------------//
const app = express();//here we are invoking the function to create an instance of an express app.



//------------REGISTER VIEW ENGINE-----------//
// app.Set lets us configure some application settinga

app.set('view engine', 'ejs');



//------------LISTEN FOR REQUEST------------//
app.listen(4000);// returns us an instance of the server.

//---------RESPOND TO THE REQUEST-------//
app.get('/', (req, res) => {
    // res.send('<p>home page</p>');// this is short way now. It automatically sets the content tyoe to the header instead of using .setHeader

    //res.sendFile('./views/index.html', {root:__dirname});
    res.render('index', {title: 'Home'})// express uses ejs to look for the specific file in views
})

//----------ROUTING & HTML---------//

app.get('/about', (req, res) => {
    // res.send('<p>about page</p>');
    //res.sendFile('./views/about.html', {root:__dirname});
    res.render('about', {title: 'About'});
})


app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Create a new Blog'});
})

app.get('/background', (req, res) => {
    res.render('background', {title: 'My Background'});
})

app.get('/hobbies', (req, res) => {
 res.render('hobbies', {title: 'My Hobbies'});

})

app.get('/learn', (req, res) => {
    res.render('learn', {title: 'Learn about me'});
})




//------REDIRECT THE EASY WAY-------//
//app.get('/about-us', (req, res) => {
   // res.redirect('/about');
//})


//------404 PAGE-------//
app.use((req, res) => {// using the (.use) method doesn't specify a url it goes through every avaible one and if theres no match, then it executes the function.
    res.status(404).render('404', {title: '404'})
    //.sendFile('./views/404.html', {root: __dirname})// using this method picks out the file from the specified root instead of the entire computer.
})//never use this 404 thing before the other url response and request because its going to run before the others.