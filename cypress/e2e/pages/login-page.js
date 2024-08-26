class LoginPage {

    fillEmail(email) {
        cy.get("input#login-email").type(email);
        return this;
    }

    fillPassword(password) {
        cy.get("input#login-password-input").type(password);
        return this;
    }

    clickLogin() {
        cy.get("button[class=\"q-primary q-fluid q-button-medium q-button submit\"]").click();
        return this;
    }
}

export default LoginPage;