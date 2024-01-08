/ <reference types="cypress" />

describe("Load website, add multiples to cart, go to basket and checkout", function () {

    it ("Load website, add multiples to cart, go to basket and checkout", function (){

        cy.visit ("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get(':nth-child(12) > .product-action > button').click()
        cy.get(':nth-child(2) > .product-action > button').click()
        cy.get(':nth-child(3) > .product-action > button').click()
        cy.get(':nth-child(4) > .product-action > button').click()
        cy.get(':nth-child(30) > .product-action > button').click()
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click({force:true});
        cy.contains('Place Order').click({force:true});
        cy.get('select').select('United Kingdom')
        cy.get('.chkAgree').click()
        cy.get('button').click()

    })

})

describe("Search for a pumpkin add to cart,Check for orange colour is showing, once added to cart", function () {

    it ("Search for a pumpkin add to cart, Check for orange colour is showing, once added to cart", function (){

        cy.visit ("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword')
            .type ('Pumpkin')
        cy.get('.search-button').click() 
        cy.get('.product-action > button').click()
        cy.contains('ADDED').should('have.css', 'background-color','rgb(252, 119, 16)')
       
        

    
});
});



describe("Delivery date filter (Click on) calendar will load, select to January (Jan 25th) prove date has been selected, then clear the date in the field", function () {

it ("Delivery date filter (Click on) calendar will load, select to January (Jan 25th) prove date has been selected, then clear the date in the field", function (){

    cy.visit ("https://rahulshettyacademy.com/seleniumPractise/#/offers")
      
        cy.get('.react-date-picker')
        .find('input').eq(0)
        .type('2024-01-25', {force:true})
      
      cy.get('.react-date-picker')
        .find('input').eq(0)
        .invoke('val')
        .should('eq', '2024-01-25')

        cy.get('.react-date-picker__clear-button__icon').click()
    
    
    

});
});




