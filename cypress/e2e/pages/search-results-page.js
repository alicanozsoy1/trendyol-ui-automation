class searchResultsPage {

    resultsIsDisplayed() {
        cy.get("div:nth-child(2) > div.p-card-chldrn-cntnr.card-border > a").scrollIntoView().should("be.visible");
        return this;
    }

}
export default searchResultsPage;