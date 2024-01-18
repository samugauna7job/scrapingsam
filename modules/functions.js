 const scrollToElement = async (driver, element) => {
    try {
        await driver.executeScript('arguments[0].scrollIntoView({ behavior: "auto", block: "center", inline: "center" });', element);
        await element.takeScreenshot().then(function(image, err) {
                writeFileSync('./img/tabla5ULTIMATE.png', image, 'base64', function(err) {
                console.log(`error en takescreenshot ${err}`);
            });
        });
    } catch (error) {
        console.log(`error in scrollToElement: ${error}`);
    }
};
 const hghgh = async (driver) => {
    try {
        //Localizar el elemento 
        const info =  await driver.findElement(By.id('domiCntr'));
        //Obtener el texto del elemento
        const adress = await info.getText();
        const adressObj = {
            adress: adress
        }
        return adressObj
    } catch (error) {
        console.log(`error in getAdress: ${error}`);
    }
};

module.exports = {scrollToElement,hghgh};