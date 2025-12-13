const multer = require('multer')
const path = require('path')

// Configurazione storage per salvare le immagini
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images') // cartella dove salvare le immagini
    },
    filename: (req, file, cb) => {
        // Mantiene il nome originale del file
        cb(null, file.originalname)
    }
})

// Filtro per accettare solo immagini
const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|webp/
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase())
    const mimetype = allowedTypes.test(file.mimetype)

    if (extname && mimetype) {
        cb(null, true)
    } else {
        cb(new Error('Only image files are allowed (jpeg, jpg, png, gif, webp)'))
    }
}

// Configurazione multer
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024 // limite 5MB
    }
})

module.exports = upload
