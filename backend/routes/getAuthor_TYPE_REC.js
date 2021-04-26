const express = require("express");
const poolData = require("../configDatabase");

const router = express.Router();

router.get('/sidebar', async (req, res, next) => {
    const connection = await poolData.getConnection();
    await connection.beginTransaction();
    try {
        const author = await connection.query(
            `SELECT concat(author_fname,\" \",author_lname) author_name
             FROM AUTHOR
             LIMIT 10
        `)
        const type = await connection.query(`
            SELECT type_name
            FROM BOOK_TYPE
            LIMIT 10
         `)
        const pop = await connection.query(`
            SELECT book_id, book_name, price, book_image, popular, group_concat( DISTINCT(author_fname)," ",author_lname separator ', ') as author_name
            FROM BOOK,BOOK_AUTHOR,AUTHOR
            WHERE BOOK.book_id = BOOK_AUTHOR.BOOK_book_id AND BOOK_AUTHOR.AUTHOR_author_id = AUTHOR.author_id AND BOOK.popular = 1
            GROUP BY BOOK.book_id
            limit 10
         `)
        const authors = author[0].map(data => data.author_name)
        const types = type[0].map(data => data.type_name)
        const data = {
            authors: authors,
            types: types,
        }
        res.json(data)
    } catch (err) {
        res.json({ massage: "Something Went Wrong !!!" });
        next(err);
    } finally {
        console.log("End Process send author data")
        connection.release()
    }
})

router.get('/popbook', async (req, res, next) => {
    const connection = await poolData.getConnection();
    await connection.beginTransaction();
    try {
        const pop = await connection.query(`
            SELECT book_id, book_name, price, book_image, popular, group_concat( DISTINCT(author_fname)," ",author_lname separator ', ') as author_name
            FROM BOOK,BOOK_AUTHOR,AUTHOR
            WHERE BOOK.book_id = BOOK_AUTHOR.BOOK_book_id AND BOOK_AUTHOR.AUTHOR_author_id = AUTHOR.author_id AND BOOK.popular = 1
            GROUP BY BOOK.book_id
            limit 10
         `)
        res.json(pop[0])
    } catch (err) {
        res.json({ massage: "Something Went Wrong !!!" });
        next(err);
    } finally {
        console.log("End Process send author data")
        connection.release()
    }
})


exports.router = router
