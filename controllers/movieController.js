const connection = require('../database/connection')

const index = (req, res) => {
    res.send('Show all movies here')
}


const show = (req, res) => {
    res.send('Show me the movie with id ' + req.params.id)
}





module.exports = {
    index,
    show
}