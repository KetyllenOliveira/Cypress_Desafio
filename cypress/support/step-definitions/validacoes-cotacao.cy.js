import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

Given('que o usuário está na página de seguro automotivo', () => {
  cy.visit('/app.php')
  cy.acessarAutomobile()
})

Then('o sistema deve exibir a mensagem {string}', (mensagem) => {
  cy.validarMensagem(mensagem)
})

And('o usuário preenche os campos obrigatórios na seção "Dados do Veículo"', () => {
  cy.preencheVehicleData()
  cy.validarPreenchimentoVehicleData()
})

And('o usuário preenche os campos obrigatórios na seção "Dados do Segurado"', () => {
  cy.acessarInsurantData()
  cy.preencheInsurantData()
  cy.validarPreenchimentoInsurantData()
})

And('o usuário preenche os campos obrigatórios na seção "Dados do Produto"', () => {
  cy.acessarProductData()
  cy.preencheProductData()
  cy.validarPreenchimentoProductData()
})

And('o usuário seleciona a opção "Silver" na seção "Opção de Preço"', () => {
  cy.acessarPriceOption()
  cy.preenchePriceOption()
  cy.validarPreenchimentoPriceOption()
})

When('o usuário preenche os campos obrigatórios na seção "Enviar Cotação"', () => {
  cy.acessarSendQuote()
  cy.preencheSendQuote()
  cy.validarPreenchimentoSendQuote()
})

When('o usuário envia a cotação', () => {
  cy.clicarSend()
})

When('o usuário acessa a seção "Enviar Cotação"', () => {
  cy.acessarSendQuote()
})

When('o usuário preenche o campo com um e-mail inválido', () => {
  cy.preencherEmailInvalido()
})
