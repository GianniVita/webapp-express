const mysql2 = require('mysql2')
const connection = mysql2.createConnection({
    
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME_DATABASE

})

connection.connect((err)=>{
    if(err) {
        console.log(err.stack);
        throw err.message
    }
    console.log('Connection to the DB successful!');
    
    
})

module.exports = connection