const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

const bookRouter = require('./routes/database')


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use(bookRouter.router)

app.listen(port, () => {
    console.log(`Backend app listening at http://localhost:${port}`)
})
