describe('Deselection of Contributor and Agency', function () {
  beforeEach(() => {
    cy.visit('https://stagingweb.alamy.com/');
    cy.get('.h-10 > .size-full').type('cars');
    cy.wait(10000);
    cy.get('[data-tid="banner-accept"]').click();
    cy.get('.rounded-r-full').click();
  });
  it("Verify selecting and deselecting contributor ", function () {
    cy.get(
      '[data-testid="search-tile-1"] [data-testid="same-contributor-button"]'
    ).click({ force: true });
    cy.get('[data-testid="AppliedFilterspseudoidTitle"]').should(
      'contain.text',
      'Images by: Derek Crouch');
      cy.get('[data-testid="AppliedFilterspseudoidTitle"]').click()
});
   it('Verify Agency filter and deselect', function () {
    cy.get('[data-testid="filter-panel"]').click();
    cy.get('[data-testid="contributor-button"] > .pt-2').click();
    cy.get('[data-testid="00000000000000000000000000000000"]').click();
    cy.get('[data-testid="confirm-filter-button"]').click();
    cy.get('[data-testid="AppliedFiltersaTitle"]').should(
      'contain.text',
      'Agency: Alamy Photographers');
      cy.get('[data-testid="AppliedFilterspseudoidTitle"]').click()
  });
});
    

     