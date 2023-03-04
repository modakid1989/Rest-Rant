//Set up a basic Express server that listens for incoming HTTP requests and responds accordingly.

//Load the 'dotenv' module and call its 'config()' function to load environment variables from a file named '.env' in the root directory of the project. The environment variables are loaded into 'process.env' and can be accessed by the application code. 
require('dotenv').config()
const express = require('express');
const methodOverride = require('method-override')
const app = express()

// Express Settings
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))


//set up a middleware function that maps all requests that start with '/places' to a router defined in the file './controllers/places' which will allow the router to handle all requests to the '/places' path.
app.use('/places', require('./controllers/places'))

//set up a route for the root path of the web server that will listen for GET requests. When a GET request is received, execute the callback function which will send the response to the client with the string "Hello world!"
app.get('/', (req, res) => {
    res.render('home')
})

//set up a catch-all route that will handle any requests that do not match any of the other routes defined. Send a 404 status code.
app.get('*', (req, res) => {
    res.status(404).render('error404')
  })
  


//start the web server and tell it to listen for incoming requests on the port specified in the 'PORT' environment variable.
app.listen(process.env.PORT, () => {
    console.log("I AM ALIVE!")
})