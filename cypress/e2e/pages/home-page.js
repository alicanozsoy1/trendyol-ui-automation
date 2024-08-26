class HomePage{

    controlAccount(value) {
        cy.get("p.link-text").contains("Hesabım").trigger("mouseover");
        cy.get("p.user-name").should('have.text',value);
        return this;
    }

}
export default HomePage;