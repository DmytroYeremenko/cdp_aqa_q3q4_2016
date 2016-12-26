var ProductsPage = function () {

    //--------------------------------------------------------------------------
    // Elements
    //--------------------------------------------------------------------------
    this.btnLogo = $('[class^="logo"]');

    this.btnStarWars = $('[alt="LEGO Star Wars"]')
    //--------------------------------------------------------------------------
    // Functions
    //--------------------------------------------------------------------------
    this.clickStarWars = function () {
        this.btnStarWars.click();
    }
};

module.exports = ProductsPage;
