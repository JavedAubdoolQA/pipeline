Feature: Login

    User has the ability to log in to the application

    Scenario: Successfully login to the saucedemo site
    Given the user navigates to "https://www.saucedemo.com/"
    When the user enters "standard_user" in the "username" field
    And the user enters "secret_sauce" in the "password" field
    And the user clicks on the "Login" button
    Then validate that the "inventory_list" is visible