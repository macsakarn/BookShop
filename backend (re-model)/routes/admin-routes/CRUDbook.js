const router = require('express').Router();
const poolData = require("../../config/database");
const passport = require("passport");
const { ExtractToken } = require('../../library/authModule');
const multer = require('multer')
const path = require('path');
const { validateAddBook } = require('../../library/validateModule');


var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './static/uploads') // path to save file
    },
    filename: function (req, file, callback) {
        // set file name
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage: storage })

router.post('/addBook', passport.authenticate('jwt', { session: false }), upload.single('bookImage'), async (req, res, next) => {
    const file = req.file;
    const dataObject = req.body;
    const valid = validateAddBook(dataObject);
    console.log(valid)
    if (!file) {
        return res.status(400).json({ message: "Please upload a file" });
    }

    const book_image = file.path.substr(6)

    const connection = await poolData.getConnection();
    await connection.beginTransaction();
    const jwt_payload = ExtractToken(req.headers.authorization);

    if (jwt_payload.role === "I'm admin" && valid.result ===true) {
        try {
            const name = req.body.book_name;
            const year = req.body.pb_year;
            const price = req.body.price;
            const amount = req.body.book_amount;
            const des = req.body.description;
            const pop = req.body.popular;
           
            const author = JSON.parse(req.body.author)
            const type = JSON.parse(req.body.type)



            let findBook = await connection.query('SELECT book_name, pb_year FROM BOOK WHERE book_name=? AND pb_year=?', [name, year])
            if (findBook[0].length > 0) {
                return res.json({ massage: "Duplicate Book" })
            }
            else {
                const insertBook = `INSERT INTO BOOK SELECT 0, ?, ?, ?, ?, ?, ?, ? FROM DUAL WHERE NOT EXISTS(  SELECT book_name FROM BOOK WHERE book_name=? LIMIT 1 );`


                await connection.query(insertBook, [name, year, price, amount, book_image, des, pop, name, name])


                const insertBooktype = " INSERT INTO BOOK_TYPE SELECT 0,? FROM DUAL WHERE NOT EXISTS( SELECT type_name FROM BOOK_TYPE WHERE type_name=? LIMIT 1 );"
                await type.map(
                    async data => {
                        var typeName = data.type_name
                        await connection.query(insertBooktype, [typeName, typeName])
                    }
                )

                const insertBook_book_type = "INSERT IGNORE INTO BOOK_BOOK_TYPE (Book_book_id, BOOK_TYPE_type_id) SELECT book_id,type_id FROM BOOK, BOOK_TYPE  WHERE book_id = (SELECT book_id FROM BOOK WHERE book_name=?) AND type_id = (SELECT type_id FROM BOOK_TYPE WHERE type_name=?); "
                await type.map(
                    async data => {
                        var typeName = data.type_name
                        await connection.query(insertBook_book_type, [name, typeName])
                    }
                )

                const insertAuthor = "INSERT INTO AUTHOR SELECT 0, ?, ? FROM DUAL  WHERE NOT EXISTS(  SELECT author_fname FROM AUTHOR WHERE author_fname=? AND author_lname =? LIMIT 1);"
                await author.map(
                    async data => {
                        var fname = data.author_fname
                        var lname = data.author_lname
                        await connection.query(insertAuthor, [fname, lname, fname, lname]
                        )
                    })

                const insertBook_author = "INSERT IGNORE INTO BOOK_AUTHOR (BOOK_book_id,AUTHOR_author_id) SELECT book_id,author_id FROM BOOK, AUTHOR WHERE book_id = (SELECT book_id FROM BOOK WHERE book_name=?) AND author_id = (SELECT author_id FROM AUTHOR WHERE author_fname=? AND author_lname=?);"
                await author.map(
                    async data => {
                        var fname = data.author_fname
                        var lname = data.author_lname
                        await connection.query(insertBook_author, [name, fname, lname]
                        )
                    })
            }
            await connection.commit()
            res.json({ massage: "Success" })
        } catch (err) {
            await connection.rollback();
            res.json({ massage: "Something Went Wrong !!!" });
            next(err);
        } finally {
            console.log('ServerLog : End Process Book Add ')
            connection.release()
        }
    }
    else {
        res.status(401).send("Unauthorize");
    }

})


router.delete('/deletebook/:bookid', passport.authenticate('jwt', { session: false }), async (req, res, next) => {
    const deleteBookTypeScript = "DELETE FROM BOOK_BOOK_TYPE WHERE Book_book_id = ?"
    const deleteBookAuthorScript = "DELETE FROM BOOK_AUTHOR WHERE Book_book_id = ?"
    const deleteBookScript = "DELETE FROM BOOK WHERE book_id = ?"
    const connection = await poolData.getConnection();
    const jwt_payload = ExtractToken(req.headers.authorization);

    if (jwt_payload.role === "I'm admin") {
        await connection.beginTransaction();
        try {
            await connection.query(deleteBookTypeScript, [req.params.bookid])

            await connection.query(deleteBookAuthorScript, [req.params.bookid])

            await connection.query(deleteBookScript, [req.params.bookid])

            await connection.commit()
            res.json({ massage: "Success" })
        } catch (err) {
            await connection.rollback();
            res.json({ massage: "Something Went Wrong !!!" });
            next(err);
        } finally {
            console.log('ServerLog : End Process Delete BOOK ')
            connection.release()
        }
    }
    else {
        res.status(401).send("Unauthorize");
    }

})


router.put('/updatebook/:bookid', passport.authenticate('jwt', { session: false }), upload.single('bookImage'), async (req, res, next) => {
    const bookID = req.params.bookid
    var file = req.file;
    var book_image = ""



    const deleteBookTypeScript = "DELETE FROM BOOK_BOOK_TYPE WHERE Book_book_id = ?"
    const deleteBookAuthorScript = "DELETE FROM BOOK_AUTHOR WHERE Book_book_id = ?"
    const deleteBookScript = "DELETE FROM BOOK WHERE book_id = ?"
    const connection = await poolData.getConnection();
    const jwt_payload = ExtractToken(req.headers.authorization);

    if (jwt_payload.role === "I'm admin") {
        await connection.beginTransaction();
        try {

            if (!file) {
                let book_image_old = await connection.query('SELECT book_image FROM freedbtech_BookStore.BOOK where book_id = ?', [bookID])
                book_image = book_image_old[0][0].book_image
            } else {
                book_image = file.path.substr(6)
            }

            await connection.query(deleteBookTypeScript, [req.params.bookid])

            await connection.query(deleteBookAuthorScript, [req.params.bookid])

            await connection.query(deleteBookScript, [req.params.bookid])

            const name = req.body.book_name
            const year = req.body.pb_year
            const price = req.body.price
            const amount = req.body.book_amount
            const des = req.body.description
            const pop = req.body.popular

            const author = JSON.parse(req.body.author)
            const type = JSON.parse(req.body.type)

            let findBook = await connection.query('SELECT book_name, pb_year FROM BOOK WHERE book_name=? AND pb_year=?', [name, year])
            console.log(findBook)
            if (findBook[0].length > 0) {
                return res.json({ massage: "Duplicate Book" })
            }
            else {
                const insertBook = `INSERT INTO BOOK SELECT ?, ?, ?, ?, ?, ?, ?, ? FROM DUAL WHERE NOT EXISTS(  SELECT book_name FROM BOOK WHERE book_name=? LIMIT 1 ); SELECT book_id FROM BOOK WHERE book_name=?`


                await connection.query(insertBook, [bookID, name, year, price, amount, book_image, des, pop, name, name])


                const insertBooktype = " INSERT INTO BOOK_TYPE SELECT 0,? FROM DUAL WHERE NOT EXISTS( SELECT type_name FROM BOOK_TYPE WHERE type_name=? LIMIT 1 );"
                await type.map(
                    async data => {
                        var typeName = data.type_name
                        await connection.query(insertBooktype, [typeName, typeName])
                    }
                )

                const insertBook_book_type = "INSERT IGNORE INTO BOOK_BOOK_TYPE (Book_book_id, BOOK_TYPE_type_id) SELECT book_id,type_id FROM BOOK, BOOK_TYPE  WHERE book_id = (SELECT book_id FROM BOOK WHERE book_name=?) AND type_id = (SELECT type_id FROM BOOK_TYPE WHERE type_name=?); "
                await type.map(
                    async data => {
                        var typeName = data.type_name
                        await connection.query(insertBook_book_type, [name, typeName])
                    }
                )

                const insertAuthor = "INSERT INTO AUTHOR SELECT 0, ?, ? FROM DUAL  WHERE NOT EXISTS(  SELECT author_fname FROM AUTHOR WHERE author_fname=? AND author_lname =? LIMIT 1);"
                await author.map(
                    async data => {
                        var fname = data.author_fname
                        var lname = data.author_lname
                        await connection.query(insertAuthor, [fname, lname, fname, lname]
                        )
                    })

                const insertBook_author = "INSERT IGNORE INTO BOOK_AUTHOR (BOOK_book_id,AUTHOR_author_id) SELECT book_id,author_id FROM BOOK, AUTHOR WHERE book_id = (SELECT book_id FROM BOOK WHERE book_name=?) AND author_id = (SELECT author_id FROM AUTHOR WHERE author_fname=? AND author_lname=?);"
                await author.map(
                    async data => {
                        var fname = data.author_fname
                        var lname = data.author_lname
                        await connection.query(insertBook_author, [name, fname, lname]
                        )
                    })

            }

            await connection.commit()
            res.json({ massage: "Success" })
        } catch (err) {
            await connection.rollback();
            res.json({ massage: "Something Went Wrong !!!" });
            next(err);
        } finally {
            console.log('ServerLog : End Process Delete BOOK ')
            connection.release()
        }
    }
    else {
        res.status(401).send("Unauthorize");
    }

})


module.exports = router;
