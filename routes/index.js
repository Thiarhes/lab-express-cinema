const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model.js')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res) => {
    Movie.find()
        .then(allMoviesFromTheDB => {
            res.render('movies', { movies: allMoviesFromTheDB });
        })
        .catch(error => console.log('Error while getting the  movies from the DB: ', error));
});


module.exports = router;
