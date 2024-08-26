class CategoryProductsPage {

    getProduct() {
        cy.get("div:nth-child(2) > div.p-card-chldrn-cntnr.card-border").scrollIntoView().should('be.visible');
        return this;
    }

    clickToProduct() {
        cy.get("div:nth-child(2) > div.p-card-chldrn-cntnr.card-border").scrollIntoView().should("be.visible")
        cy.get("div:nth-child(2) > div.p-card-chldrn-cntnr.card-border").click();
        return this;
    }

    clickToAddToCart() {
        cy.get("div.add-to-basket-button-text").click();
    return this;
    }

}
export default CategoryProductsPage;