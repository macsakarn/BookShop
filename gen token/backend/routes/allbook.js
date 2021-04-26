const express = require("express");
const poolData = require("../config/database");

const router = express.Router();

router.get('/allbook', async (req,res,next)=>{
    const connection = await poolData.getConnection();
    await connection.beginTransaction();
    try{
        const allBook = await connection.query(`
        SELECT book_id, book_name, pb_year, price, book_amount, book_image, description, popular, group_concat( DISTINCT(author_fname)," ",author_lname separator ', ') as author_name, GROUP_CONCAT(DISTINCT(type_name) SEPARATOR ', ') as type
        FROM BOOK,BOOK_AUTHOR,AUTHOR,BOOK_TYPE,BOOK_BOOK_TYPE 
        WHERE BOOK.book_id = BOOK_AUTHOR.BOOK_book_id AND BOOK_AUTHOR.AUTHOR_author_id = AUTHOR.author_id AND BOOK.book_id = BOOK_BOOK_TYPE.Book_book_id AND BOOK_BOOK_TYPE.BOOK_TYPE_type_id = BOOK_TYPE.type_id
        GROUP BY BOOK.book_id
    `)
    await connection.commit()
       
    allBook[0].forEach(val => {
        const author =  val.author_name.split(', ')
        const type =  val.type.split(', ')
        val.author_name = author
        val.type = type
    });

    console.log(allBook[0])
    res.json(allBook[0])
    }catch(err){
        await connection.rollback();
        res.json({massage : "Something Went Wrong !!!"});
        next(err);
    }finally{
        console.log('ServerLog : End Process Send All book data ')
        connection.release()
    }
})

exports.router = router