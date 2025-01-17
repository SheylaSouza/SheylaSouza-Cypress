Feature: Login to the app

  Scenario: Successful login with valid credentials
    Given the user is on the login screen
    When the user fills a valid email and password
    And clicks on the "Login" button
    Then the app should display the home screen

  Scenario: Login with invalid credentials
    Given the user is on the login screen
    When the user fills an invalid email or password
    And clicks on the "Login" button
    Then the app should display an error message

  Scenario: forgotten password
    Given the user is on the login screen
    And clicked on the "Forgotten Password" link
    When the user fills in the email
	And clicks on Send Link button 
	Then the app should display a screen with the information to update the password

