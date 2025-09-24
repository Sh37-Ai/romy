const { Builder, By, until } = require("selenium-webdriver");

(async function testMap() {
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("http://localhost:3000");

    // attendre que la carte soit affichée
    await driver.wait(
      until.elementLocated(By.css(".leaflet-container")),
      10000
    );

    // attendre le marqueur Casablanca
    let marker = await driver.wait(
      until.elementLocated(By.css("img.leaflet-marker-icon")),
      20000
    );

    console.log("✅ Marqueur trouvé :", await marker.isDisplayed());

    await marker.click();

    let popup = await driver.wait(
      until.elementLocated(By.css(".leaflet-popup-content")),
      5000
    );

    console.log("✅ Popup trouvé :", await popup.getText());
  } finally {
    await driver.quit();
  }
})();
