const connection = require('../database/connection')

const index = (req, res) => {

    const sql = 'SELECT * FROM movies'
    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: true, message: err.message })
        //console.log(results);
        res.json(results)
    })
}


const show = (req, res) => {
    res.send('Show me the movie with id ' + req.params.id)

    
}





module.exports = {
    index,
    show
}