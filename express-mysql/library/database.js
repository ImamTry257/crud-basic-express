let mysql = require('mysql')

let conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'crud-basic'
})

conn.connect((err) => {
    if(!err){
        console.log('Koneksi berhasil')
    }else{
        console.log(err)
    }
})

module.exports = conn