📌 Descrição do Projeto

Este projeto tem como objetivo a automação de testes da funcionalidade de Login utilizando Cypress, com foco em cenários negativos, validação de mensagens de erro e controle de estado da aplicação durante a execução dos testes.

O projeto foi desenvolvido com atenção especial à organização do código, reutilização de comandos, uso de fixtures e isolamento dos cenários de teste, simulando boas práticas aplicadas em ambientes profissionais de QA.

🧪 Escopo dos Testes
Funcionalidade testada

Tela de Login da aplicação OrangeHRM (ambiente de demonstração)

Cenários cobertos (Login inválido)

Email inválido

Senha inválida

Campo email vazio

Campo senha vazio

Cada cenário valida:

Tentativa de login

Exibição correta da mensagem de erro esperada

Comportamento da aplicação após falha de autenticação

🗂 Estrutura do Projeto
cypress/
 ├── e2e/
 │    └── login.cy.js
 ├── fixtures/
 │    └── login.json
 ├── support/
 │    └── commands.js
 └── cypress.config.js

📄 Fixtures

Os dados de teste estão centralizados no arquivo:

cypress/fixtures/login.json


Esse arquivo contém uma lista de cenários inválidos, permitindo:

Testes orientados a dados (Data Driven Tests)

Facilidade de manutenção

Reaproveitamento de cenários

⚙️ Comandos Customizados

Foram criados comandos personalizados para melhorar a legibilidade e reutilização do código:

cy.openSite()
Responsável por abrir a aplicação e validar a URL da tela de login.

cy.login(email, password)
Realiza o preenchimento condicional dos campos de login e executa a ação de submit.

Esses comandos ficam centralizados em:

cypress/support/commands.js

🔁 Controle de Estado da Aplicação

Durante a execução dos testes com múltiplos cenários no mesmo fluxo, foi identificado que a aplicação mantinha estado entre as tentativas de login.

Para garantir:

Independência entre os cenários

Confiabilidade dos testes

Ambiente limpo a cada iteração

Foi utilizado o comando:

cy.reload()


Esse controle evita falsos positivos ou falhas causadas por resíduos de execuções anteriores.

✅ Boas Práticas Aplicadas

Uso de beforeEach para preparação do ambiente

Testes orientados a dados com fixture

Reutilização de código com comandos customizados

Validação explícita de mensagens exibidas na interface

Isolamento de estado entre cenários

Código legível e organizado

🚀 Tecnologias Utilizadas

JavaScript

Cypress

Node.js

JSON (fixtures)

📈 Objetivo do Projeto

Este projeto faz parte de uma evolução prática no aprendizado de QA Automation, com foco em:

Pensamento analítico

Entendimento real do funcionamento dos testes

Diagnóstico e correção de falhas

Simulação de desafios encontrados no dia a dia de um QA Júnior