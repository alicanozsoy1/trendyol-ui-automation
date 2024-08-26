class CartPage {

    checkTheCart() {
        cy.get("p.pb-item").should('be.visible');
        return this;
    }

}
export default CartPage;