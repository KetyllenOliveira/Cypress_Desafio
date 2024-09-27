const SELECT_MARCA = '#make'
const INPUT_DESEMPENHO_MOTOR = '#engineperformance'
const INPUT_DATA_FABRICACAO = '#dateofmanufacture'
const SELECT_NUMERO_ASSENTOS = '#numberofseats'
const SELECT_COMBUSTIVEL = '#fuel'
const INPUT_PRECO = '#listprice'
const INPUT_KM_ANUAL = '#annualmileage'

Cypress.Commands.add('preencherDadosVeiculo', () => {
    cy.get(SELECT_MARCA).select('Honda')
    cy.get(INPUT_DESEMPENHO_MOTOR).type('1000')
    cy.get(INPUT_DATA_FABRICACAO).type('09/09/2014')
    cy.get(SELECT_NUMERO_ASSENTOS).select('5')
    cy.get(SELECT_COMBUSTIVEL).select('Petrol')
    cy.get(INPUT_PRECO).type('30000')
    cy.get(INPUT_KM_ANUAL).type('15000')
})

Cypress.Commands.add('validarPreenchimentoDadosVeiculo', () => {
    cy.get('#entervehicledata .counter').
    should('contain', 0)
})

