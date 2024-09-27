const INPUT_NOME = '#firstname'
const INPUT_SOBRENOME = '#lastname'
const INPUT_DATA_NASCIMENTO = '#birthdate'
const RADIO_GENERO = '.ideal-radiocheck-label #gendermale'
const INPUT_ENDERECO = '#streetaddress'
const INPUT_PAIS = '#country'
const INPUT_CEP = '#zipcode'
const INPUT_CIDADE = '#city'
const INPUT_OCUPACAO = '#occupation'
const RADIO_ESPORTES_PERIGOSOS = '.ideal-radiocheck-label #cliffdiving'
const BTN_DADOS_SEGURADO = '#nextenterinsurantdata'

Cypress.Commands.add('acessarDadosSegurado', () => {
    cy.get(BTN_DADOS_SEGURADO).click()
})

Cypress.Commands.add('preencherDadosSegurado', () => {
    cy.get(INPUT_NOME).type('Emilly')
    cy.get(INPUT_SOBRENOME).type('Oliveira')
    cy.get(INPUT_DATA_NASCIMENTO).type('02/12/2002')
    cy.get(INPUT_ENDERECO).type('Rua A, 123')
    cy.get(INPUT_PAIS).select('Brazil')
    cy.get(INPUT_CEP).type('12345')
    cy.get(INPUT_CIDADE).type('São Paulo')
    cy.get(INPUT_OCUPACAO).select('Employee')
    cy.get(RADIO_ESPORTES_PERIGOSOS).check({ force: true })
})

Cypress.Commands.add('validarPreenchimentoDadosSegurado', () => {
    cy.get('#enterinsurantdata .counter').should('contain', 0)
})
