const RADIO_SILVER = '.ideal-radiocheck-label #selectsilver'
const BTN_OPCAO_PRECO = '#nextselectpriceoption'

Cypress.Commands.add('acessarOpcaoPreco', () => {
    cy.get(BTN_OPCAO_PRECO).click()
})

Cypress.Commands.add('preencherOpcaoPreco', () => {
    cy.get(RADIO_SILVER).check({ force: true })
})

Cypress.Commands.add('validarPreenchimentoOpcaoPreco', () => {
    cy.get('#selectpriceoption .counter').should('contain', 0)
})
