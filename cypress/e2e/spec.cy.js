describe('input-form-test', () => {
  it('メールの入力の不備を表示', () => {
    cy.visit('/login');
    cy.get('#email-input').type('badMail');
    cy.get('#submit-button').click();
    cy.get('.error-message').should('incorrect form!');
  });
  it('メールがない場合',() =>{
    cy.visit('/login');
    cy.get('#email-input').type('good@mymail.com');
    cy.get('#submit-button').click();
    cy.get('.error-message').should('not exist');
  })
})