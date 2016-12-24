var CheckPrice = function () {

    //--------------------------------------------------------------------------
    // Elements
    //--------------------------------------------------------------------------

    this.btnAddToBag = element(by.cssContainingText('[class^="add-to-cart-button"]', 'ADD TO BAG'));

    this.btnMyBag = $('[href="/en-US/#cart"]');

    this.btnAddToWishList = $('[class^="add-to-wishlist-button"]');

    this.btnMyWistList = $('[data-test="util-bar-link-wishlist"]');

    this.txtWishName = $('[data-test="wishlist-item-75159-code"]');

    this.btnEdit = $('[class^="mini-cart__checkout-link"]');

    this.eleCartName = $('[data-test="item-product-code"]');
    //--------------------------------------------------------------------------
    // Functions
    //--------------------------------------------------------------------------
    this.clickAddToWishList = function () {
        this.btnAddToWishList.click();
    };

    this.getWishName = function () {
        return this.txtWishName.getText();
    };

    this.getCartName = function () {
        return this.eleCartName.getText();
    };


    this.clickMyWistList = function () {
        this.btnMyWistList.click();
    };

    this.clickAddToBag = function () {
        this.btnAddToBag.click();
    };

    this.clickBag = function () {
        return this.btnMyBag.click();
    };
};

module.exports = CheckPrice;
