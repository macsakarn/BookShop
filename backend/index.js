const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000



const bookRouter = require('./routes/database')
const sendAllbookRouter = require('./routes/allbook')
const getBookFromId = require('./routes/getBookFromId')


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use(bookRouter.router)
app.use(sendAllbookRouter.router)
app.use(getBookFromId.router)

app.listen(port, () => {
    console.log(`Backend app listening at http://localhost:${port}`)
})
