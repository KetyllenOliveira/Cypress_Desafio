const BTN_AUTOMOBILE = '#nav_automobile'
const LBL_MENSAGEM = '#xLoaderQuote'
const LBL_ALERTA = '.sweet-alert'

Cypress.Commands.add('acessarAutomovel', () => {
    cy.get(BTN_AUTOMOBILE).click()
})

Cypress.Commands.add('validarMensagem', (mensagem) => {
    if (mensagem == 'Please, select a price option to send the quote.') {
        cy.get(LBL_MENSAGEM).should('contain', mensagem)
    } else {
        cy.wait(5000)
        cy.get(LBL_ALERTA).should('contain', mensagem)
    }
})
