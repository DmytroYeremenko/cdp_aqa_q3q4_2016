var bottlejs = require('bottlejs').pop('test');

bottlejs.factory('PageObject', function () {
    return {
        getLogoPage: function () {
            var logoPage = require('./logo/logo.po.js');
            return new logoPage();
        },
        getProductsPage: function () {
            var productsPage = require('./products/products.po.js');
            return new productsPage();
        },
        getStarWarsPage: function () {
            var starWarsPage = require('./star_wars/star_wars.po.js');
            return new starWarsPage();
        },
        getStarWarsProductsPage: function () {
            var starWarsProductsPage = require('./star_wars/products/products.po.js');
            return new starWarsProductsPage();
        },
        getCheckPricePage: function () {
            var checkPricePage = require('./checkprice/checkprice.po.js');
            return new checkPricePage();
        }
    }
});

module.exports = bottlejs;
