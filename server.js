const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 3000
const moviesRouter = require('./route/movies')
const serverError = require('./middlewares/serverError')
const notFound = require('./middlewares/notFound')

app.use(cors({
    origin: 'http://localhost:5175'
}));


// register the body parser
app.use(express.json())
// register the static assets folder
app.use(express.static('public'))

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})


app.get('/', (req, res) => {
    res.send('My Movies Reviews API servers')
})

app.use('/api/movies', moviesRouter)


// server error(500) handling
app.use(serverError)


// Not found error(404) handling
app.use(notFound)