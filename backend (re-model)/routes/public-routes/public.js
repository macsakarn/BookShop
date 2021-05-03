const { getSomethings } = require('../../library/getDataModule');
const { fetchAllBooks, sidebar, fetchBookById } = require('../../library/SqlScript');

const router    =   require('express').Router();

router.get('/fetchAllBooks', async (req, res, next) => {
    console.log("Begin fetchAllBooks Process...");
    const books = await getSomethings(fetchAllBooks.script)
    
    books[0].forEach(val => {
        const author =  val.author_name.split(', ')
        const type =  val.type.split(', ')
        val.author_name = author
        val.type = type
    });

    console.log("Send All Books to Client result : ");
    console.log("Book Data amount -> " + books[0].length + "books");
    res.json(books[0]);
})

router.get('/sidebar', async (req, res, next) => {
    console.log("Begin sidebar Process");
    const author = await getSomethings(sidebar.author_Script);
    const type  = await getSomethings(sidebar.type_Script);
    const pop = await getSomethings(sidebar.pop_Script);

    const authors = author[0].map(data => data.author_name);
    const types = type[0].map(data => data.type_name);

    const data = {
        authors: authors,
        types: types,
    }
    console.log("End sidebar Process");
    console.log("send sidebar result : ");
    console.log(!!(data));
    res.json(data);
})

router.get('/popbook', async (req, res, next) => {
    try {
        const pop = await getSomethings(sidebar.pop_Script)
        res.json(pop[0])
    } catch (err) {
        res.json({ massage: "Something Went Wrong !!!" });
        next(err);
    } finally {
        console.log("End Process send author data")
        connection.release()
    }
})

router.get('/fetchBook/:bookId', async (req, res, next) => {
    console.log("Begin fetchBook by Id Process");
    const book = await getSomethings(fetchBookById.script, eval(fetchBookById.params));
   
    if (book[0].length === 0) {
        res.json({ massage: "Don't have this book in database" })
    }
    book[0].forEach(val => {
        const author = val.author_name.split(', ')
        const type = val.type.split(', ')
        val.author_name = author
        val.type = type
    });

    console.log("End Send Book By Id Process");
    console.log("send Book by Id result : ");
    console.log({status : !!(book[0][0]), book : book[0][0]});

    res.json(book[0][0]);
})




module.exports = router;
