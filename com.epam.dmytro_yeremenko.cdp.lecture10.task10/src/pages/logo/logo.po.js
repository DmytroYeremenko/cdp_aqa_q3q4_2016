var LogoPage = function () {

    //--------------------------------------------------------------------------
    // Elements
    //--------------------------------------------------------------------------

    this.btnProducs = element(by.cssContainingText('[class^="gn-icon gn-icon-products"]', 'Products'));
    //--------------------------------------------------------------------------
    // Functions
    //--------------------------------------------------------------------------
    this.clickProducts = function () {
        this.btnProducs.click();
    }

};

module.exports = LogoPage;
