//Librerias utilizadas
const { degrees, PDFDocument, rgb, StandardFonts } = require('pdf-lib')
const fs = require('fs');
const path = require('path');

//Cargamos el archivo pdf que queremos modificar
const filePath = path.join(__dirname, 'marchilag.pdf');

async function modifyPdf() {

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
    firstPage.drawText('1,630.00', {
        x: 128,
        y: height / 2 + 237,
        size: 10,
        font: helveticaFont,
        // color: rgb(0.95, 0.1, 0.1),
    });

    firstPage.drawText('Los Amates           12             05             2020', {
        x: 250,
        y: height / 2 + 290,
        size: 10,
        font: helveticaFont,
        // color: rgb(0.95, 0.1, 0.1),
    });

    firstPage.drawText('1,630     00', {
        x: 403,
        y: height / 2 + 250,
        size: 10,
        font: helveticaFont,
        // color: rgb(0.95, 0.1, 0.1),
    });

    firstPage.drawText('1,630     00', {
        x: 403,
        y: height / 2 + 218,
        size: 10,
        font: helveticaFont,
        // color: rgb(0.95, 0.1, 0.1),
    });

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Escribe texto en el documento en las coordenadas dadas
    firstPage.drawText('1,630.00', {
        x: 128,
        y: height / 2 + -23,
        size: 10,
        font: helveticaFont,
        // color: rgb(0.95, 0.1, 0.1),
    });

    firstPage.drawText('Los Amates           12             05             2020', {
        x: 250,
        y: height / 2 + 30,
        size: 10,
        font: helveticaFont,
        // color: rgb(0.95, 0.1, 0.1),
    });

    firstPage.drawText('1,630     00', {
        x: 403,
        y: height / 2 + -10,
        size: 10,
        font: helveticaFont,
        // color: rgb(0.95, 0.1, 0.1),
    });

    firstPage.drawText('1,630     00', {
        x: 403,
        y: height / 2 + -42,
        size: 10,
        font: helveticaFont,
        // color: rgb(0.95, 0.1, 0.1),
    });


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Escribe texto en el documento en las coordenadas dadas
    firstPage.drawText('1,630.00', {
        x: 128,
        y: height / 2 + -282,
        size: 10,
        font: helveticaFont,
        // color: rgb(0.95, 0.1, 0.1),
    });

    firstPage.drawText('Los Amates           12             05             2020', {
        x: 250,
        y: height / 2 + -230,
        size: 10,
        font: helveticaFont,
        // color: rgb(0.95, 0.1, 0.1),
    });

    firstPage.drawText('1,630     00', {
        x: 403,
        y: height / 2 + -270,
        size: 10,
        font: helveticaFont,
        // color: rgb(0.95, 0.1, 0.1),
    });

    firstPage.drawText('1,630     00', {
        x: 403,
        y: height / 2 + -302,
        size: 10,
        font: helveticaFont,
        // color: rgb(0.95, 0.1, 0.1),
    });



    // Guarda los cambios hechos en los bytes del pdf cargado en memoria
    const pdfBytes = await pdfDoc.save();

    // Se guarda el archivo pdf en un directorio del sistema
    fs.writeFile(path.join(__dirname, 'test.pdf'), pdfBytes, 'binary', function (err) {
        err => {
            console.log('error al guardar pdf');

        }
    });
}

modifyPdf();