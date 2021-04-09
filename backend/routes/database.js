const express = require("express");
const poolData = require("../configDatabase");


const router = express.Router();

router.post('/admin/addBook', async (req,res)=>{
    const connection = await poolData.getConnection(); 
    await connection.beginTransaction();
    // await connection.query('SELECT * FROM BOOK;SELECT * FROM AUTHOR')
    await connection.query(`
        INSERT INTO AUTHOR SELECT 0, ?, ? FROM DUAL
        WHERE NOT EXISTS(
            SELECT author_fname FROM AUTHOR
            WHERE author_fname=?
            AND author_lname =? LIMIT 1
        );

        INSERT INTO BOOK SELECT 0, ?, ?, ?, ?, ?, ?, ? FROM DUAL
        WHERE NOT EXISTS(
            SELECT book_name FROM BOOK
            WHERE book_name=? LIMIT 1
        );

        INSERT INTO BOOK_TYPE SELECT 0,? FROM DUAL
        WHERE NOT EXISTS(
            SELECT type_name FROM BOOK_TYPE
            WHERE type_name=? LIMIT 1
        );
        
        INSERT INTO BOOK_BOOK_TYPE (Book_book_id, BOOK_TYPE_type_id)
        SELECT book_id,type_id FROM BOOK, BOOK_TYPE
        WHERE book_id = LAST_INSERT_ID() AND type_id = (SELECT type_id FROM BOOK_TYPE WHERE type_name=?);

        INSERT INTO BOOK_AUTHOR (BOOK_book_id,AUTHOR_author_id)
        SELECT book_id,author_id FROM BOOK, AUTHOR 
        WHERE book_id = LAST_INSERT_ID() AND author_id = (SELECT author_id FROM AUTHOR WHERE author_fname=? AND author_lname=?);
    `, [req.body.author[0].author_fname, req.body.author[0].author_lname, req.body.author[0].author_fname, req.body.author[0].author_lname,
        req.body.book_name, req.body.pb_year, req.body.price, req.body.book_amount, null, req.body.description, req.body.popular, req.body.book_name,
        req.body.type[0].type_name, req.body.type[0].type_name,
        req.body.type[0].type_name,
        req.body.author[0].author_fname, req.body.author[0].author_lname
    ])
    // await connection.query(`
    //     INSERT IGNORE INTO BOOK
    //     VALUES (?,?,?,?,?,?,?,?);
    // `,[0,req.body.book_name,req.body.pb_year,req.body.price,req.body.book_amount,null,req.body.description,req.body.popular])
    // await connection.query(`
    //    INSERT INTO BOOK_AUTHOR (BOOK_book_id)
    //    SELECT MAX(book_id) FROM BOOK`)
    // await connection.query(`
    //     INSERT INTO BOOK_AUTHOR (AUTHOR_author_id)
    //     SELECT author_id FROM AUTHOR WHERE author_fname=? AND author_lname=?
    //     `,[req.body.author[0].author_fname, req.body.author[0].author_lname])
    connection.commit();
    res.json({massage : "add book success"});
    connection.release();
})


exports.router = router
