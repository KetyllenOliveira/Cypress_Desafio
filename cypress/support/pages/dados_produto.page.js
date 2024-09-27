const INPUT_DATA = '#startdate'
const SELECT_SOMA_SEGURA = '#insurancesum'
const SELECT_MERITRATING = '#meritrating'
const SELECT_SEGURO = '#damageinsurance'
const RADIO_PROTECAO = '.ideal-radiocheck-label #EuroProtection'
const SELECT_CARRO_RESERVA = '#courtesycar'
const BTN_DADOS_PRODUTO = '#enterproductdata'

Cypress.Commands.add('acessarDadosProduto', () => {
    cy.get(BTN_DADOS_PRODUTO).click()
})

Cypress.Commands.add('preencherDadosProduto', () => {
    cy.get(INPUT_DATA).type('11/11/2024')
    cy.get(SELECT_SOMA_SEGURA).select('3000000')
    cy.get(SELECT_MERITRATING).select('Bonus 1')
    cy.get(SELECT_SEGURO).select('Full Coverage')
    cy.get(RADIO_PROTECAO).check({ force: true })
    cy.get(SELECT_CARRO_RESERVA).select('Yes')
})

Cypress.Commands.add('validarPreenchimentoDadosProduto', () => {
    cy.get('#enterproductdata .counter').should('contain', 0)
})
