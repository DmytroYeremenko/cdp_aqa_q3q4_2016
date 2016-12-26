var StarWarsPage = function () {

    //--------------------------------------------------------------------------
    // Elements
    //--------------------------------------------------------------------------
    this.btnProductsTabItem = element(by.cssContainingText('[class^="item-title"]', 'Products'))
    //--------------------------------------------------------------------------
    // Functions
    //--------------------------------------------------------------------------
    this.clickProductsTabItem = function () {
        this.btnProductsTabItem.click();
    }
};

module.exports = StarWarsPage;
