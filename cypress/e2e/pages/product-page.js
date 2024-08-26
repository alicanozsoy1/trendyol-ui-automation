class ProductPage {

    addedToCartPopUp() {
        cy.get("ul#basket-product-list").should('be.visible');
        return this;
    }

    goToCart() {
        cy.get("p.link-text").contains("Giriş Yap").click();
        return this;
    }


}
export default ProductPage;