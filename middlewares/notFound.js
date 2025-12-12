const notFound = (req, res, next) => {
    res.status(404).json({ message: 'Route NOT Found' })
}


module.exports = notFound