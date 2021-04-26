const express = require("express");
const poolData = require("../config/database");

const router = express.Router();

router.get('/getauthor', async (req, res, next) => {
    const connection = await poolData.getConnection();
    await connection.beginTransaction();
    try{
        const author = await connection.query(
            `SELECT concat(author_fname,\" \",author_lname) author_name
             FROM AUTHOR
             LIMIT 10
        `)
        res.json(author[0].map(data=>data.author_name))
    }catch(err){
        res.json({massage : "Something Went Wrong !!!"});
        next(err);
    }finally{
        console.log("End Process send author data")
        connection.release()
    }
})

router.get('/gettype', async (req, res, next) => {
    const connection = await poolData.getConnection();
    await connection.beginTransaction();
    try{
        const type = await connection.query(`
        SELECT type_name
        FROM BOOK_TYPE
        LIMIT 10
    `)
    res.json(type[0].map(data=>data.type_name))
    }catch(err){
        res.json({massage : "Something Went Wrong !!!"});
        next(err);
    }finally{
        console.log("End Process send author data")
        connection.release()
    }
})


exports.router = router
