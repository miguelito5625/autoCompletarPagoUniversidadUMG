const express = require('express');
const cors = require('cors');
const listaRutas = require('express-list-endpoints');

const app = express();

app.use(cors());
app.set('port', process.env.PORT || 3000);
app.use(express.json({extended: true}));

const routes = require('./routes/index');

app.use('/', routes);

app.listen(app.get('port'), () => {
    console.log(listaRutas(app));
    console.log('server on port', app.get('port'));
})