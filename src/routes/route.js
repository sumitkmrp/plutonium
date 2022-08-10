const express = require('express');
const _ = require('underscore')

const abc = require('../introduction/intro')
const loggerModule = require('../logger/logger.js')
const formatterModule = require('../validator/formatter')
const helperModule = require('../util/helper')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    loggerModule.printInfo()
    formatterModule.trimMyString()
    formatterModule.getUpperCaseString()
    formatterModule.changetoLowerCase()
    helperModule.getTodaysDate()
    helperModule.getCurrentMonth()
    helperModule.printBatchDetails()
    let weekdend = ['Saturday', 'Sunday', 'Monday']
    let result = _.first(weekdend, 2)
    console.log('Unserscore example resultr is ', result)
    res.send('My second ever api!')
});


// router.get('/get/moovies/:indexNumber', function (req, res) {
//     const movies = ['iron man', 'thor', 'captain america', 'the hulk', 'the avengers', 'black panther', 'end game', 'spiderman']
//     console.log(req.params.indexNumber)
//     let movieIndex = req.params.indexNumber
//     //check index
//     if (movieIndex < 0 || movieIndex > movieIndex.length) {
//         return res.send('the index value is not correct, plz check it')
//     }

//     let requireMovie = movies[movieIndex]
//     res.send(requireMovie)


// })

// router.get("/films", function (req, res) {
//     const films = [
//         {
//             "id": 1,
//             "name": "the hulk"
//         },
//         {
//             "id": 2,
//             "name": "iron man"
//         },
//         {
//             "id": 3,
//             "name": "thor"
//         }
//     ]
//     res.send(films)
// })

// router.get("/films/:filmId", function (req, res) {
//     const films = [
//         {
//             "id": 1,
//             "name": "the hulk"
//         },
//         {
//             "id": 2,
//             "name": "iron man"
//         },
//         {
//             "id": 3,
//             "name": "thor"
//         }
//     ]
//     let filmId = req.params.filmId
//     for (let i = 0; i < films.length; i++) {
//         let movie = film[i]
//         if (film.id == filmId)
//             return res.send(film)
//     }
//     res.send("film id does not exist")
//     // console.log('filmId recieve is',filmId)
// })


// router.get('/test-you', function (req, res) {
//     res.send('This is the second routes implementation')
// })

// router.get('/give-me-students-data', function (req, res) {

// })
module.exports = router;
// adding this comment for no reason

// hello world!