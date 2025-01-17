import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-xpath';
   
Given('the customer is on the product page', () => {
 // Visit the product page
 cy.visit('https://www.unibet.com/');

});