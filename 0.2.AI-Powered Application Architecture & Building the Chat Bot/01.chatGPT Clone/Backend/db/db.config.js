import sql from 'mysql2/promise'


//create connection
const db = mysql.createPool({
    host: 'localhost',
    user: gpt-admin,
    password: 123456,
    database: 'gpt-clone',
})

export default db;