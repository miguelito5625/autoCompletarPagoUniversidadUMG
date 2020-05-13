const { degrees, PDFDocument, rgb, StandardFonts } = require('pdf-lib')
const fs = require('fs');
const path = require('path');

const mainController = {};

mainController.saludo = (req, res) => {
    res.send('hola');
}

mainController.llenarFormularioPago = async (req, res) => {
    console.log(req.body);
    var fechas = req.body.fecha.split('-');
    console.log(fechas[0]);
    console.log(fechas[1]);
    console.log(fechas[2]);
    
    // console.log(req.file.filename);

    if (req.body.mora == 'true') {
        console.log('tiene mora');
    } else {
        console.log('no tiene mora');
        const filePath = req.file.path;
        //Obtiene el documento pdf guardado en el sistema
        const existingPdfBytes = await fs.readFileSync(filePath);

        //Carga los bytes del documento pdf
        const pdfDoc = await PDFDocument.load(existingPdfBytes)

        // Carga en memoria el tipo de letra Helvetica
        const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)

        // Obtiene la primera pagina del documento pdf
        const pages = pdfDoc.getPages()
        const firstPage = pages[0]

        // Obtiene el alto y ancho de la primera pagina
        const { width, height } = firstPage.getSize()

        // Escribe texto en el documento en las coordenadas dadas
        firstPage.drawText(Number(req.body.colegiatura).toFixed(2), {
            x: 128,
            y: height / 2 + 237,
            size: 10,
            font: helveticaFont,
            // color: rgb(0.95, 0.1, 0.1),
        });

        firstPage.drawText(req.body.municipio, {
            x: 242,
            y: height / 2 + 290,
            size: 10,
            font: helveticaFont,
            // color: rgb(0.95, 0.1, 0.1),
        });

        firstPage.drawText(fechas[2]+'             '+fechas[1]+'             '+fechas[0], {
            x: 335,
            y: height / 2 + 290,
            size: 10,
            font: helveticaFont,
            // color: rgb(0.95, 0.1, 0.1),
        });

        firstPage.drawText(req.body.colegiatura +'     00', {
            x: 403,
            y: height / 2 + 250,
            size: 10,
            font: helveticaFont,
            // color: rgb(0.95, 0.1, 0.1),
        });

        firstPage.drawText(req.body.colegiatura +'     00', {
            x: 403,
            y: height / 2 + 218,
            size: 10,
            font: helveticaFont,
            // color: rgb(0.95, 0.1, 0.1),
        });

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Escribe texto en el documento en las coordenadas dadas
        firstPage.drawText(Number(req.body.colegiatura).toFixed(2), {
            x: 128,
            y: height / 2 + -23,
            size: 10,
            font: helveticaFont,
            // color: rgb(0.95, 0.1, 0.1),
        });

        
        firstPage.drawText(req.body.municipio, {
            x: 242,
            y: height / 2 + 30,
            size: 10,
            font: helveticaFont,
            // color: rgb(0.95, 0.1, 0.1),
        });

        firstPage.drawText(fechas[2]+'             '+fechas[1]+'             '+fechas[0], {
            x: 335,
            y: height / 2 + 30,
            size: 10,
            font: helveticaFont,
            // color: rgb(0.95, 0.1, 0.1),
        });

        firstPage.drawText(req.body.colegiatura +'     00', {
            x: 403,
            y: height / 2 + -10,
            size: 10,
            font: helveticaFont,
            // color: rgb(0.95, 0.1, 0.1),
        });

        firstPage.drawText(req.body.colegiatura +'     00', {
            x: 403,
            y: height / 2 + -42,
            size: 10,
            font: helveticaFont,
            // color: rgb(0.95, 0.1, 0.1),
        });


        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Escribe texto en el documento en las coordenadas dadas
        firstPage.drawText(Number(req.body.colegiatura).toFixed(2), {
            x: 128,
            y: height / 2 + -282,
            size: 10,
            font: helveticaFont,
            // color: rgb(0.95, 0.1, 0.1),
        });

        firstPage.drawText(req.body.municipio, {
            x: 242,
            y: height / 2 + -230,
            size: 10,
            font: helveticaFont,
            // color: rgb(0.95, 0.1, 0.1),
        });

        firstPage.drawText(fechas[2]+'             '+fechas[1]+'             '+fechas[0], {
            x: 335,
            y: height / 2 + -230,
            size: 10,
            font: helveticaFont,
            // color: rgb(0.95, 0.1, 0.1),
        });

        firstPage.drawText(req.body.colegiatura +'     00', {
            x: 403,
            y: height / 2 + -270,
            size: 10,
            font: helveticaFont,
            // color: rgb(0.95, 0.1, 0.1),
        });

        firstPage.drawText(req.body.colegiatura +'     00', {
            x: 403,
            y: height / 2 + -302,
            size: 10,
            font: helveticaFont,
            // color: rgb(0.95, 0.1, 0.1),
        });



        // Guarda los cambios hechos en los bytes del pdf cargado en memoria
        const pdfBytes = await pdfDoc.save();

        // Se guarda el archivo pdf en un directorio del sistema
        await fs.writeFileSync(req.file.path, pdfBytes, 'binary', function (err) {
            err => {
                console.log('error al guardar pdf');

            }
        });
    }

    res.json({
        response: 'ok',
        file: req.file.filename
    });
}



module.exports = mainController;