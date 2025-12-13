const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movieController')

// /api/movies
router.get('/', movieController.index)

// /api/movies (POST - create new movie)
router.post('/', movieController.store)

// /api/movies/1 (esempio) 
router.get('/:id', movieController.show)




module.exports = router