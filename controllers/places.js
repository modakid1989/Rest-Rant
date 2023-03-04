//Set up a basic Express Router that listens for GET requests to the root route of a web server and responds with string.

//import the Express module and create a new router instance using the 'Router()' function that will define routes for the web server.
const router = require('express').Router()
const db = require('../models')

router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
        res.render('places/index', {places})
    })
    .catch(err => {
        console.log(err)
        res.render('error404')
    })
})

router.post('/', (req, res) => {
    db.Place.create(req.body)
    .then(() => {
        res.redirect('/places')
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})

router.get('/new/', (req, res) => {
    res.render('places/new')
})

router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
    .then(place => {
        res.render('places/show', { place })
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})

router.put('/:id', (req, res) => {
    res.send('PUT /places/:id stub')
})

router.delete('/:id', (req, res) => {
    res.send('DELETE /places/:id stub')
})

router.get('/:id/edit', (req, res) => {
    res.send('GET edit form stub')
})

router.post('/:id/rant', (req, res) => {
    res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})




// const places = require("../models/places.js")

// router.post('/', (req, res) => {
//     console.log(req.body)
//     if (!req.body.pic) {
//     //Default image if one is not provided
//     req.body.pic = 'http://placekitten.com/400/400'
//     }
//     if (!req.body.city) {
//         req.body.city = 'Anytown'
//     }
//     if (!req.body.state) {
//         req.body.state = 'USA'
//     }
//     places.push(req.body)
//     res.redirect('/places')
// })
  
// //set up a route for the root path of the web server that will listen for GET requests. When GET request is received, excecute the callback function that will send the response t the client with the string "GET/places
// router.get('/', (req, res) => { 
//     res.render('places/index', {places})
// })

// router.get('/new', (req, res) => {
//     res.render('places/new')
// })

// router.get('/:id', (req, res) => {
//     let id = Number(req.params.id)
//     if (isNaN(id)) {
//         res.render('error404')
//     } else if (!places[id]) {
//         res.render('error404') 
//     }
//     else {
//     res.render('places/show', { place: places[id], id: id })
//     }
// })

// router.get('/:id/edit', (req, res) => {
//     let id = Number(req.params.id)
//     if (isNaN(id)) {
//         res.render('error404')
//     } else if (!places[id]) {
//         res.render('error404')
//     } else {
//        res.render('places/edit', { 
//         place: places[id], 
//         index: id })
//     }
// })

// router.put('/:id', (req, res) => {
//     let id = Number(req.params.id)
//     if (isNaN(id)) {
//         res.render('error404')
//     }
//     else if (!places[id]) {
//         res.render('error404')
//     }
//     else {
//         // Dig into req.body and make sure data is valid
//         if (!req.body.pic) {
//             // Default image if one is not provided
//             req.body.pic = 'http://placekitten.com/400/400'
//         }
//         if (!req.body.city) {
//             req.body.city = 'Anytown'
//         }
//         if (!req.body.state) {
//             req.body.state = 'USA'
//         }
  
//         // Save the new data into places[id]
//         places[id] = req.body
//         res.redirect(`/places/${id}`)
//     }
//   })
  

// router.delete('/:id', (req, res) => {
//     console.log("test")
//     let id = Number(req.params.id)
//     if (isNaN(id)) {
//         res.render('error404')
//     } else if (!places[id]) {
//         res.render('error404')
//     } else {
//         places.splice(id, 1)
//         res.redirect('/places')
//      }
//     })

//export the router instance so that it can be used by other parts of the application.
module.exports = router