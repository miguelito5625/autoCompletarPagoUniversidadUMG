const express = require('express');
const cors = require('cors');
const listaRutas = require('express-list-endpoints');
const path = require('path');
const multer = require('multer');
const { v4: uuid } = require('uuid');

var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('sslcert/privkey.pem', 'utf8');
var certificate = fs.readFileSync('sslcert/cert.pem', 'utf8');

var credentials = {key: privateKey, cert: certificate};


const app = express();

app.use(cors());
app.set('port', process.env.PORT || 3000);
app.use(express.json({extended: true}));

const storage = multer.diskStorage({
    destination: path.join(__dirname, 'files/pdf/uploads'),
    filename: (req, file, cb, filename) => {
        // console.log(file);
        cb(null, uuid() + path.extname(file.originalname));
    }
}) 
app.use(multer({storage}).single('boletaPago'));


const routes = require('./routes/index');

app.use('/', routes);

app.use(express.static(path.join(__dirname, 'files/pdf/uploads')));


// app.listen(app.get('port'), () => {
//     console.log(listaRutas(app));
//     console.log('server on port', app.get('port'));
// })

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(80);
httpsServer.listen(443);