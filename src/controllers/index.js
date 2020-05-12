const mainController = {};

mainController.saludo = (req, res) => {
    res.send('hola');
}

module.exports = mainController;