import LoginPage from "../pages/login-page";
import MainPage from "../pages/main-page";
import HomePage from "../pages/home-page";
import CategoryProductsPage from "../pages/category-products-page";
import SearchResultsPage from "../pages/search-results-page";
import ProductPage from "../pages/product-page";
import CartPage from "../pages/cart-page";

describe("Login Test", () => {

    const loginPage = new LoginPage();
    const mainPage = new MainPage();
    const homePage = new HomePage();
    const cartPage = new CartPage();
    const searchResultsPage = new SearchResultsPage();
    const categoryProductsPage = new CategoryProductsPage();
    const productPage = new ProductPage();


    it('Login Successful', () => {
        cy.fixture("userdata").then((data) => {
            mainPage.visit(data.url)
                .closePopUp()
                .clickLogin();
            loginPage
                .fillEmail(data.email)
                .fillPassword(data.password)
                .clickLogin();
            //homePage.controlAccount(data.email);
        });
    });

    it('Successfully Redirected to Category Page', () => {
        cy.fixture("userdata").then((data) => {
            mainPage.visit(data.url)
                .closePopUp()
                .hoverCategories();
            //categoryProductsPage.getProduct();
        });
    });

    it("Searching Product With Searchbar", () => {
        cy.fixture("userdata").then((data) => {
            mainPage.visit(data.url)
                .closePopUp()
                .searchBar(data.searchBarText);
            //searchResultsPage.resultsIsDisplayed();
        })
    });

    it("Adding Product to Cart", () => {
            cy.fixture("userdata").then((data) => {
                mainPage.visit(data.url)
                    .closePopUp()
                    .visit(data.url)
                    .hoverCategories();
                categoryProductsPage
                    .clickToProduct()
                    .clickToAddToCart();
                productPage
                    .addedToCartPopUp()
                    .goToCart();
                //cartPage.checkTheCart();
        })
    })

})