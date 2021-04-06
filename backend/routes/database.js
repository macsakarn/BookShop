const express = require("express");
const poolData = require("../configDatabase");


const router = express.Router();

router.post('/admin/addBook', async (req,res)=>{
    const connection = await poolData.getConnection(); 
    await connection.beginTransaction();
    await connection.query(`
        INSERT INTO AUTHOR SELECT 0,?, ? FROM DUAL
        WHERE NOT EXISTS(
            SELECT author_fname FROM AUTHOR
            WHERE author_fname=?
            AND author_lname =? LIMIT 1
        )
    `, [req.body.author[0].author_fname, req.body.author[0].author_lname, req.body.author[0].author_fname, req.body.author[0].author_lname])
    await connection.query(`
        INSERT IGNORE INTO BOOK
        VALUES (?,?,?,?,?,?,?,?) ;
    `,[0,req.body.book_name,req.body.pb_year,req.body.price,req.body.book_amount,null,req.body.description,req.body.popular])
    connection.commit();
    res.json({massage : "add book success"});
    connection.release();
})


exports.router = router