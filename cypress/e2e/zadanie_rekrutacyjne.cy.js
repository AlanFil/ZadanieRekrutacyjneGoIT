describe('Resend homework', () => {

    it('Resends homework - full path', () => {
        cy.viewport(1920, 1080);

        cy.visit('https://www.edu.goit.global/pl/account/login');

        cy.get('#user_email')
            .type('user888@gmail.com');
        cy.get('#user_password')
            .type('1234567890');
        cy.get('button[type="submit"]')
            .click();        
        
        cy.url().should('eq', 'https://www.edu.goit.global/pl/homepage');
        cy.get('button[color="primary"]')
            .should("be.visible")
            .wait(3000)
            .click();

        cy.get('[data-tour-step="homework"]')
            .click();

        cy.get('div[data-tour-step="homework-form"] *> .editor-class-name')
            .click();

        cy.get('div[data-tour-step="homework-form"] *> button[type=submit]')
            .click();
    });

});