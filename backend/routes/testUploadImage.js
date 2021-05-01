const express = require("express");
const poolData = require("../configDatabase");

const router = express.Router();


/* 
Code upload imgae
*/
const multer = require('multer')
const path = require("path");

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

router.post('/upload', upload.single('bookImage'), async (req, res, next) => {
    const file = req.file;

    if (!file) {
        return res.status(400).json({ message: "Please upload a file" });
    }

    console.log(file.path.substr(6));
    res.send("success!");
})



exports.router = router