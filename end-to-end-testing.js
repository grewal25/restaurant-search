

const WebDriver = require('selenium-webdriver');
const AxeBuilder = require('axe-webdriverjs');

const driver = new WebDriver.Builder()
    .forBrowser('safari')
    .build();

driver
    .get('localhost:3000')
    .then(() => {
        AxeBuilder(driver).analyze((err, results) => {
            if (err) {
                console.log(err)
            }
            console.log(results);
        });
    });