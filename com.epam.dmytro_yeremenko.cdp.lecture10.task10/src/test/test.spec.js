var pageObject = require('./../pages/pages').container.PageObject;
var logoPage = pageObject.getLogoPage();
var productsPage = pageObject.getProductsPage();
var starWarsProductsPage = pageObject.getStarWarsProductsPage();
var checkPricePage = pageObject.getCheckPricePage();
var starWarsPage = pageObject.getStarWarsPage();

var commonHelper = require('./../helpers/common.helper.js');

describe('Lego Test', function () {

    describe('Adding item in the cart feature ', function () {

        beforeAll(function () {
            browser.get(browser.baseUrl);
        });

        afterAll(function () {
            commonHelper.clearAllData();
        });

        it('should see logo page', function () {
            expect(logoPage.btnProducs.isDisplayed()).toBeTruthy();
        });

        it('should click products menu item', function () {
            logoPage.clickProducts();

            commonHelper.waitUntilElementVisible(productsPage.btnLogo)
            expect(productsPage.btnLogo.isDisplayed()).toBeTruthy();
        });

        it('should click products', function () {
            productsPage.clickStarWars();

            expect(starWarsPage.btnProductsTabItem.isDisplayed()).toBeTruthy();
        });

        it('should select products', function () {
            starWarsPage.clickProductsTabItem();

            expect(starWarsProductsPage.btnStarWarsProducts.isDisplayed()).toBeTruthy()
        });

        it('should click star wars product', function () {
            starWarsProductsPage.clickStarWarsProducts();

            expect(starWarsProductsPage.btnBag.isDisplayed()).toBeTruthy();
        });

        it('should add to cart', function () {
            starWarsProductsPage.clickBag();

            commonHelper.waitUntilElementVisible(starWarsProductsPage.btnContinue)

            starWarsProductsPage.clickContinue();
        });

        it('should add to bag', function () {
            browser.ignoreSynchronization = true;
            checkPricePage.clickAddToBag();
        });

        it('should click on with list', function () {
            //browser.ignoreSynchronization = false
            checkPricePage.clickBag();

            commonHelper.waitUntilElementVisible(checkPricePage.btnEdit);
            expect(checkPricePage.getCartName()).toContain('75159')
        });
    });

    describe('Adding items in the wish list feature', function () {

        beforeAll(function () {
            browser.get(browser.baseUrl);
        });

        afterAll(function () {
            commonHelper.clearAllData();
        });

        it('should see logo page', function () {
            expect(logoPage.btnProducs.isDisplayed()).toBeTruthy();
        });

        it('should click products menu item', function () {
            logoPage.clickProducts();

            commonHelper.waitUntilElementVisible(productsPage.btnLogo)
            expect(productsPage.btnLogo.isDisplayed()).toBeTruthy();
        });

        it('should click products', function () {
            productsPage.clickStarWars();

            expect(starWarsPage.btnProductsTabItem.isDisplayed()).toBeTruthy();
        });

        it('should select products', function () {
            starWarsPage.clickProductsTabItem();

            expect(starWarsProductsPage.btnStarWarsProducts.isDisplayed()).toBeTruthy()
        });

        it('should click star wars product', function () {
            starWarsProductsPage.clickStarWarsProducts();

            expect(starWarsProductsPage.btnBag.isDisplayed()).toBeTruthy();
        });

        it('should add to cart', function () {
            starWarsProductsPage.clickBag();

            commonHelper.waitUntilElementVisible(starWarsProductsPage.btnContinue);

            starWarsProductsPage.clickContinue();
        });

        it('should add to wish list', function () {
            browser.ignoreSynchronization = true
            checkPricePage.clickAddToWishList();
        });

        it('should click on wish list', function () {
            //browser.ignoreSynchronization = false
            checkPricePage.clickMyWistList();
            browser.sleep(3000);
            expect(checkPricePage.getWishName()).toContain('75159');
        });
    });
});