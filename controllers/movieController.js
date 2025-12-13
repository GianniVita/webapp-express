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
    const id = Number(req.params.id)
    const sql = 'SELECT * FROM movies WHERE id = ?'
    const sqlReviews = 'SELECT id, name, vote, text, created_at FROM reviews WHERE movie_id = ? '

    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ error: true, message: err.message })
        //console.log(results);
        if (results.length === 0) return res.status(404).json({ error: true, message: 'Movie NOT Found' })

        const movie = results[0]

        connection.query(sqlReviews, [id], (errReviews, resultsReviews) => {
            if (errReviews) return res.status(500).json({ error: true, message: err.message })
            console.log(resultsReviews);
            movie.reviews = resultsReviews
            res.json(movie)

        })

    })
}


const store = (req, res) => {
    const { title, director, genre, release_year, abstract, image } = req.body

    // Validazione campi obbligatori
    if (!title || !director) {
        return res.status(400).json({
            error: true,
            message: 'Title and director are required fields'
        })
    }

    const sql = `INSERT INTO movies (title, director, genre, release_year, abstract, image) 
                 VALUES (?, ?, ?, ?, ?, ?)`

    const values = [title, director, genre || null, release_year || null, abstract || null, image || null]

    connection.query(sql, values, (err, results) => {
        if (err) return res.status(500).json({ error: true, message: err.message })

        // Restituisce il film appena creato
        res.status(201).json({
            success: true,
            message: 'Movie created successfully',
            data: {
                id: results.insertId,
                title,
                director,
                genre,
                release_year,
                abstract,
                image
            }
        })
    })
}


module.exports = {
    index,
    show,
    store
}