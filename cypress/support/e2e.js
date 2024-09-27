// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './comandos'
import './pages/home.page'
import './pages/dados_segurado.page'
import './pages/opcao_preco.page'
import './pages/dados_produto.page'
import './pages/enviar_cotacao.page'
import './pages/dados_veiculo.page'

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('e is not defined')) {
        return false
    }
    return true
})