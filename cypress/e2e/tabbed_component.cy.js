/// <reference types="cypress" />

describe('Tabbed Component Tests', () => {
  beforeEach(() => {
    // Visit the page with the tabbed component before each test
    cy.visit('http://localhost:3030/'); // Replace with the correct URL for your local development server
  });

  it('displays all tab buttons', () => {
    // Verify that all tab buttons are present
    cy.get('.tab-button').should('have.length', 3);
    cy.get('.tab-button').first().should('have.text', 'Tab 1');
    cy.get('.tab-button').eq(1).should('have.text', 'Tab 2');
    cy.get('.tab-button').last().should('have.text', 'Tab 3');
  });

  it('switches to the correct tab content when a tab is clicked', () => {
    // Click on Tab 2 and verify the correct content is displayed
    cy.get('.tab-button').contains('Tab 2').click();
    cy.get('.tab-content')
      .should('be.visible')
      .and('contain', 'Content for Tab 2');

    // Click on Tab 3 and verify the correct content is displayed
    cy.get('.tab-button').contains('Tab 3').click();
    cy.get('.tab-content')
      .should('be.visible')
      .and('contain', 'Content for Tab 3');
  });

  it('only displays content for the active tab', () => {
    // Click on Tab 1 and verify only Tab 1 content is visible
    cy.get('.tab-button').contains('Tab 1').click();
    cy.get('.tab-content')
      .should('be.visible')
      .and('contain', 'Content for Tab 1');
    cy.get('.tab-content').should('not.contain', 'Content for Tab 2');
    cy.get('.tab-content').should('not.contain', 'Content for Tab 3');
  });

  context('when navigating tabs', () => {
    beforeEach(() => {
      // Start with Tab 1 active
      cy.get('.tab-button').contains('Tab 1').click();
    });

    it('remembers the last active tab when navigating back', () => {
      // Click on Tab 3
      cy.get('.tab-button').contains('Tab 3').click();

      // Reload the page
      cy.reload();

      // Verify Tab 3 is still active
      cy.get('.tab-button').contains('Tab 3').should('have.class', 'active');
      cy.get('.tab-content')
        .should('be.visible')
        .and('contain', 'Content for Tab 3');
    });
  });
});
