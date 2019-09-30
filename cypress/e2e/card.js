describe('Anonymous card', () => {
  it('can flip', () => {
    cy.visit('/')
      .get(':nth-child(6) > .card__body > .card__back')
      .click();
  });
});
