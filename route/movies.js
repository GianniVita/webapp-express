const express = require('express')
const router = express.Router()

// /api/movies
router.get('/', (req, res)=>{
    res.send('Show all movies here')
})

// api/movies/1(esempio) 
router.get('/:id', (req, res)=>{
    res.send('Show me the movie with id' + req.params.id)
})




module.exports = router