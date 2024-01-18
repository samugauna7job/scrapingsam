const { writeFileSync } = require('fs');
const csv = require('csvtojson');

const csvFilePath = './scraping/prueba_csv.csv';
const jsonFilePath = 'resultado.json';
const jsonNewFilter = 'resultadoFiltrado.json';

csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
        // Crear un nuevo JSON con los valores deseados
        const nuevoJson = jsonObj.map((item) => {
            const valuesArray = item['EMPRESA;rut;clave'].split(';');
            if (valuesArray.length >= 3) {
                const rut = valuesArray[1];
                const clave = valuesArray[2];
                return {
                    rut: rut,
                    clave: clave
                };
            }
            return null; // O manejar de otra manera si no hay suficientes elementos en el array
        }).filter(Boolean); // Filtrar elementos nulos si es necesario

        // Escribir el nuevo JSON en un archivo
        writeFileSync(jsonNewFilter, JSON.stringify(nuevoJson, null, 4));

        // Puedes realizar otras acciones aquí si es necesario
    })
    .catch((error) => {
        console.error('Error al procesar el archivo CSV:', error);
    });
