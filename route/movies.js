const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movieController')
const upload = require('../middlewares/uploadImage')

// /api/movies
router.get('/', movieController.index)

// /api/movies (POST - create new movie with image upload)
router.post('/', upload.single('image'), movieController.store)

// /api/movies/:id/reviews (POST - create new review)
router.post('/:id/reviews', movieController.storeReview)

// /api/movies/1 (esempio) 
router.get('/:id', movieController.show)




module.exports = router