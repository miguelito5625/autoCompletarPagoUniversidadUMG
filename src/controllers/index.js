const fs = require('fs');

const mainController = {};

mainController.saludo = (req, res) => {
    res.send('hola');
}

mainController.llenarFormularioPago = async(req, res) => {
    // console.log(req.body);
    // console.log(req.file.filename);
    
    res.json({
        response: 'ok',
        file: req.file.filename
    });
}

module.exports = mainController;