# Desafio de Automação - Academia Accenture 2024

Este projeto faz parte do **Desafio de Automação** promovido pela **Academia Accenture 2024**. O objetivo é automatizar o processo de testes para uma aplicação de simulação de seguros automotivos, utilizando a ferramenta **Cypress**. A aplicação em questão é o simulador de seguros da **Tricentis**, que permite o preenchimento de dados do veículo, segurado, e das opções de seguro. A abordagem do projeto segue os princípios de **BDD** (Behavior-Driven Development), com cenários escritos em **Cucumber**.

## Tecnologias Utilizadas

As principais tecnologias e ferramentas usadas neste projeto são:

- **Cypress**: Framework de testes end-to-end, ideal para automatizar aplicações web.
- **Cypress Cucumber Preprocessor**: Plugin que permite a escrita de cenários de teste utilizando a linguagem Gherkin.
- **Node.js**: Ambiente de execução para código JavaScript no backend, essencial para rodar o Cypress.
- **Git**: Sistema de controle de versão utilizado para o gerenciamento do código.

## Testes Implementados

O projeto automatiza o processo completo de preenchimento do formulário de cotação de seguro automotivo no simulador da Tricentis. As etapas cobertas pelos testes incluem:

1. **Cadastro de Veículo**: Validação de campos referentes às características do veículo, como marca, modelo e ano de fabricação.
2. **Dados do Segurado**: Teste do correto preenchimento de informações pessoais do segurado, como nome, data de nascimento, e endereço.
3. **Informações do Seguro**: Validação dos dados sobre o tipo de cobertura escolhida e demais opções relacionadas ao seguro.
4. **Seleção de Preço**: Teste do processo de seleção de diferentes faixas de preço para o seguro.
5. **Envio do Orçamento**: Verificação final do envio correto dos dados de cotação após o preenchimento de todas as etapas anteriores.

## Requisitos para Executar o Projeto

Antes de rodar os testes, é necessário garantir que sua máquina possui as seguintes ferramentas instaladas:

- **Node.js** (versão 12 ou superior)
- **NPM** (gerenciador de pacotes do Node.js)
- **Git** (para clonar e gerenciar o código)

