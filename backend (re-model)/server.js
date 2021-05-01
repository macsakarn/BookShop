const express  =  require('express');
const core     =  require('cors');
const passport =  require('passport');

const app =  express();

const port = 3000;

require('./config/database.js');
require('./config/passport')(passport);

app.use(core())

app.use(passport.initialize());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes/exportAll'));

app.listen(3000, ( ) => { console.log(`Your Server run on port ${ port }`) });