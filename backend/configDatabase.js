const mysql = require('mysql2/promise');

const poolData = mysql.createPool({
    host : 'freedb.tech',
    user: 'freedbtech_takai',
    password: '12345',
    database: 'freedbtech_BookStore',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

module.exports = poolData;