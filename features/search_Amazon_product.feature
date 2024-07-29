Feature: Search and purchase a product on Amazon

  Scenario: Successful product search and purchase
    Given I am on the Amazon homepage
    When I search for "laptop"
    And I select the first product from the search results
    And I add the product to the cart
    And I proceed to checkout
    And I enter my shipping details
    And I select a payment method
    And I confirm the purchase
    Then I should see a confirmation message
    And I should receive an order confirmation email
