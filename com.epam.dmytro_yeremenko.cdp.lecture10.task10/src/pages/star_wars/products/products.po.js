var StarWarsProductsPage = function () {

    //--------------------------------------------------------------------------
    // Elements
    //--------------------------------------------------------------------------
    this.btnStarWarsProducts = $('[href="https://www.lego.com/en-us/starwars/products/death-star-75159"]');

    this.btnBag = $('[class^="btn shop-button"]');

    this.btnContinue = $('[class="lego-modal-close-trigger lego-modal-redirect"]')
    //--------------------------------------------------------------------------
    // Functions
    //--------------------------------------------------------------------------

    this.clickStarWarsProducts = function () {
        this.btnStarWarsProducts.click();
    };

    this.clickBag = function () {
        this.btnBag.click();
    };

    this.clickContinue = function () {
        this.btnContinue.click();
    };
};

module.exports = StarWarsProductsPage;
