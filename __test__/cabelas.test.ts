import { CabelasPage } from "./pageObjects/cabelasObjects"

const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities } from "selenium-webdriver";
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

describe("Chewy sign in, search an item and adding that to cart and checking out", () => {

    const page = new CabelasPage(driver);
  
test("returning customer can sign in to thier account", async () => {
      await page.navigate();
      await page.clickOnAccountButton();
    })
    })