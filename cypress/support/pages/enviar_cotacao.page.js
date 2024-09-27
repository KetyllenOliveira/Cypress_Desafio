const INPUT_EMAIL = '#email'
const INPUT_TELEFONE = '#phone'
const INPUT_NOME = '#username'
const INPUT_SENHA = '#password'
const INPUT_CONFIRMA_SENHA = '#confirmpassword'
const BTN_COTACAO = '#sendquote'
const BTN_ENVIAR = '#sendemail'


Cypress.Commands.add('acessarEnviarCotacao', () => {
    cy.get(BTN_COTACAO).click()
})


Cypress.Commands.add('preencherEnviarCotacao', () => {
    cy.get(INPUT_EMAIL).type(Cypress.env('email'))
    cy.get(INPUT_TELEFONE).type(Cypress.env('phone'))
    cy.get(INPUT_NOME).type(Cypress.env('username'))
    cy.get(INPUT_SENHA).type(Cypress.env('password'))
    cy.get(INPUT_CONFIRMA_SENHA).type(Cypress.env('password'))
})


Cypress.Commands.add('clicarEnviar', () => {
    cy.get(BTN_ENVIAR).click()
})


Cypress.Commands.add('validarPreenchimentoEnviarCotacao', () => {
    cy.get('#sendquote .counter').should('contain', 0)
})


Cypress.Commands.add('preencherEmailInvalido', () => {
    cy.get(INPUT_EMAIL).type('emailinvalido')
})
