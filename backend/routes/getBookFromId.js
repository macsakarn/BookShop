const express = require("express");
const poolData = require("../configDatabase");

const router = express.Router();

router.get('/getbook/:bookid', async (req, res, next) => {
    const connection = await poolData.getConnection();
    const findBookScript = `
        SELECT B.book_id, B.book_name, B.pb_year, B.price, B.book_amount, B.book_image, B.description, B.popular, group_concat( DISTINCT(author_fname)," ",author_lname separator ', ') as author_name, GROUP_CONCAT(DISTINCT(type_name) SEPARATOR ', ') as type
        FROM BOOK B
        LEFT JOIN BOOK_AUTHOR BA
        ON B.book_id = BA.BOOK_book_id 
        LEFT JOIN AUTHOR A
        ON BA.AUTHOR_author_id = A.author_id
        LEFT JOIN BOOK_BOOK_TYPE BBT
        ON B.book_id = BBT.BOOK_book_id
        LEFT JOIN BOOK_TYPE BT
        ON BBT.BOOK_TYPE_type_id = BT.type_id
        WHERE B.book_id = ?
        GROUP BY ?
    `
    await connection.beginTransaction();
    try
    {
        const findBook = await connection.query(findBookScript, [req.params.bookid,`B.book_id`])
        console.log("try to send book data :" + req.params.bookid)
        if(findBook[0].length===0){
            res.json({massage: "Don't have this book in database"})
        }
        findBook[0].forEach(val => {
            const author =  val.author_name.split(', ')
            const type =  val.type.split(', ')
            val.author_name = author
            val.type = type
        });
        await connection.commit()
        console.log("send book id "+req.params.bookid+" success")
        res.json(findBook[0])
    }catch(err){
        await connection.rollback();
        res.json({massage : "Something Went Wrong !!!"});
        next(err);
    }finally{
        console.log('ServerLog : End Process Send a book data ')
        connection.release()
    }
})

exports.router = router