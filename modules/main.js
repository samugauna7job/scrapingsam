const { Builder } = require('selenium-webdriver');
const loginModule = require('./loginModule.js');
const dataExtractor = require('./dataExtractor.js');
const { getEconomicActivities, getFormularioF29, getNameAndRut, getAdress } = dataExtractor;
const { writeFileSync, readFileSync } = require('fs');
// const jsonData = JSON.parse(readFileSync('resultadoFiltrado.json', 'utf-8'));


async function runAllUsers(rut,password) {
    

    try {
        const driver = new Builder().forBrowser('chrome').build();
        // Obtener las propiedades rut y clave
        // const rut = data.rut;
        // const clave = data.clave;
        // Ejecutar la prueba con las credenciales actuales
        //     await loginModule(driver, "76502363-7", "HTML2020")
        await loginModule(driver, rut, password);
        //Representantes legales
        const infoArray =  await getNameAndRut(driver);
        //Domicilio
        const info2 = await getAdress(driver)
        infoArray.push(info2)
        //Actividades economicas
        const info3 = await getEconomicActivities(driver);
        infoArray.push(info3)
        //Formulario F29
        const objScreenshot = await getFormularioF29(driver);
        infoArray.push(objScreenshot)
        driver.quit();
        const outputFile = './ULTIMARECOPILACION.json';
        writeFileSync(outputFile, JSON.stringify(infoArray, null, 2));
        console.log(`Resultados guardados en ${outputFile}`);
        /* */
        return infoArray
    } catch (error) {
        console.log(`ERROR IN MAIN.JS ${error}`);
    }
}

// runAllUsers();

// async function runOnlyTest() {
//     try {
//     const driver = new Builder().forBrowser('chrome').build();
//     //Claves hardcodeadas para un solo test
//         // {
//         //     "rut": "76502363-7",
//         //     "clave": "HTML2020"
//         // }
//     await loginModule(driver, "76502363-7", "HTML2020")
//     await getFormularioF29(driver);
//     //driver.quit();
//     } catch (error) {
//         console.log(`error in runOnlyTest ${error}`);
//     }
// }
        //     await loginModule(driver, , "HTML2020")
// const rut = "769505563";
// const password = "apsc00aa00" 
// runAllUsers()
// runOnlyTest()
module.exports= runAllUsers