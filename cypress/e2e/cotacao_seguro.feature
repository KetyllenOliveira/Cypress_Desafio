# utf-8
# language: pt

Funcionalidade: Enviar cotação de seguro automotivo

Cenário: Enviar cotação com todos os formulários preenchidos corretamente com sucesso
Dado que o usuário está na página de seguro automotivo
E o usuário preenche os campos obrigatórios na seção "Dados do Veículo"
E o usuário preenche os campos obrigatórios na seção "Dados do Segurado"
E o usuário preenche os campos obrigatórios na seção "Dados do Produto"
E o usuário seleciona a opção "Silver" na seção "Opção de Preço"
E o usuário preenche os campos obrigatórios na seção "Enviar Cotação"
Quando o usuário envia a cotação
Então o sistema deve exibir a mensagem "Sending e-mail success!"

Cenário: Tentar enviar cotação preenchendo apenas o formulário "Dados do Veículo" sem sucesso
Dado que o usuário está na página de seguro automotivo
E o usuário preenche os campos obrigatórios na seção "Dados do Veículo"
Quando o usuário acessa a seção "Enviar Cotação"
Então o sistema deve exibir a mensagem "Please, select a price option to send the quote."

Cenário: Enviar cotação com dados de contato inválidos
Dado que o usuário está na página de seguro automotivo
E o usuário preenche os campos obrigatórios na seção "Dados do Veículo"
E o usuário preenche os campos obrigatórios na seção "Dados do Segurado"
E o usuário preenche os campos obrigatórios na seção "Dados do Produto"
E o usuário seleciona a opção "Silver" na seção "Opção de Preço"
Quando o usuário acessa a seção "Enviar Cotação"
E o usuário preenche o campo com um e-mail inválido
E o usuário envia a cotação
Então o sistema deve exibir a mensagem "Not finished yet..."
E o sistema deve exibir a mensagem "There is still some data missing!"
