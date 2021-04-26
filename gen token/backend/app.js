const express = require('express')
const cors = require('cors')
const passport = require('passport')
const port = 3000
require('./config/passport');

const app = express()

const sendAllBook           =   require('./routes/allbook')
const addAndDeleteBook      =   require('./routes/addAndDeletebook')
const sendBookById          =   require('./routes/sendBookById')
const sendAuthor_Type_Pop   =   require('./routes/sendAuthor-Type-Pop')

const register              =   require('./routes/register')
const Login                 =   require('./routes/login')

app.use(express.json())
app.use(express.urlencoded( { extended: true }))
app.use(cors())

app.use(sendAllBook.router)
app.use(addAndDeleteBook.router)
app.use(sendBookById.router)
app.use(sendAuthor_Type_Pop.router)

app.use(register.router)
app.use(Login.router)

app.use(passport.initialize());
app.use(passport.session());

app.listen(3000, () => {
    console.log(`Backend app listening at http://localhost:${port}`)
})