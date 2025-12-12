const express = require('express')
const cors = require('cors')
const app = express()
const PORT =  3000
const moviesRouter = require('./route/movies')

app.use(cors({
    origin: 'http://localhost:5175'
}));


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


app.use((req, res, next)=>{
    return res.status(500).json() 
        
})


// Not found error handling
app.use((req, res, next)=>{
    res.status(404).json({message:'Route NOT Found'})
})