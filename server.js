const express = require('express')
const app = express()
const PORT =  3000

const moviesRouter = require('./route/movies')


// register the body parser
app.use(express.json())
// register the static assets folder
app.use(express.static('public'))

app.listen(PORT, () =>{
    console.log(`Server listening on http://localhost:${PORT}`)
})


app.get('/', (req, res)=>{
    res.send('My Movies Reviews API servers')
})

app.use('/api/movies', moviesRouter)