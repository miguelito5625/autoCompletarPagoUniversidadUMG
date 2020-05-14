const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
// const listaRutas = require('express-list-endpoints');

const path = require('path');
const multer = require('multer');
const { v4: uuid } = require('uuid');
var bodyParser = require('body-parser')


const app = express();

app.use(cors());
// app.set('port', process.env.PORT || 3000);
app.use(express.urlencoded({extended: true}));
app.use(express.json({extended: false}));



const storage = multer.diskStorage({
    destination: path.join(__dirname, 'files/pdf/uploads'),
    filename: (req, file, cb, filename) => {
        // console.log(file);
        cb(null, uuid() + path.extname(file.originalname));
    }
}) 
app.use(multer({storage}).single('boletaPago'));

// app.all("/*", function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
//     next();
//   });
  

const routes = require('./routes/index');

app.use('/', routes);

// app.use(express.static(path.join(__dirname, 'files/pdf/uploads')));
app.use('/', express.static(path.join(__dirname, 'files/pdf/uploads')));


exports.app = functions.https.onRequest(app);
