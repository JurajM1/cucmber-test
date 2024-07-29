const assert = require("assert");
const { Given, When, Then } = require("@cucumber/cucumber");

Given("I am on the Amazon homepage", function () {
  // Kod do otwarcia strony głównej Amazon
  console.log("Opening Amazon homepage");
  // Tutaj możesz dodać kod do otwarcia strony
});

When("I search for {string}", function (product) {
  // Kod do wyszukiwania produktu
  console.log(`Searching for ${product}`);
  // Tutaj możesz dodać kod do wyszukiwania produktu
});

When("I select the first product from the search results", function () {
  // Kod do wyboru pierwszego produktu z wyników wyszukiwania
  console.log("Selecting the first product from search results");
  // Tutaj możesz dodać kod do wyboru produktu
});

When("I add the product to the cart", function () {
  // Kod do dodania produktu do koszyka
  console.log("Adding product to cart");
  // Tutaj możesz dodać kod do dodania produktu do koszyka
});

When("I proceed to checkout", function () {
  // Kod do przejścia do kasy
  console.log("Proceeding to checkout");
  // Tutaj możesz dodać kod do przejścia do kasy
});

When("I enter my shipping details", function () {
  // Kod do wprowadzenia danych wysyłkowych
  console.log("Entering shipping details");
  // Tutaj możesz dodać kod do wprowadzenia danych wysyłkowych
});

When("I select a payment method", function () {
  // Kod do wyboru metody płatności
  console.log("Selecting payment method");
  // Tutaj możesz dodać kod do wyboru metody płatności
});

When("I confirm the purchase", function () {
  // Kod do potwierdzenia zakupu
  console.log("Confirming purchase");
  // Tutaj możesz dodać kod do potwierdzenia zakupu
});

Then("I should see a confirmation message", function () {
  // Kod do sprawdzenia wiadomości potwierdzającej
  console.log("Checking for confirmation message");
  // Tutaj możesz dodać kod do sprawdzenia wiadomości potwierdzającej
});

Then("I should receive an order confirmation email", function () {
  // Kod do sprawdzenia e-maila z potwierdzeniem zamówienia
  console.log("Checking for order confirmation email");
  // Tutaj możesz dodać kod do sprawdzenia e-maila
});

module.exports = {};
