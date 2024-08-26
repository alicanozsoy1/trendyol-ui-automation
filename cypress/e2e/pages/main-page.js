class MainPage {

    visit(url) {
        cy.visit(url, {failOnStatusCode: false});
        return this;
    }

    closePopUp() {
        cy.get("div[title=\"Kapat\"]").click();
        cy.get("a#rejectAllButton").click();
        return this;
    }

    clickLogin() {
        cy.get("p.link-text").contains("Giriş Yap").click();
        return this;
    }

    hoverCategories() {
        cy.get("a[href=\"/butik/liste/5/elektronik\"]").trigger("mouseover");
        cy.get("a[href=\"/bilgisayar-x-c108656\"]").click();
        return this;
    }

    searchBar(searchBarText) {
        cy.get("input[data-testid=\"suggestion\"]").type(searchBarText);
        cy.get("i[data-testid=\"search-icon\"]").click();
        return this;
    }

    scrollToCourse() {
        cy.get("div[id=\"course-unit-container-Python\"] > div:nth-child(2)")
            .scrollIntoView().should('be.visible').trigger('mouseover');
        return this;
    }



}

export default MainPage;