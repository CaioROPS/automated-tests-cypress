# Cypress 🚀

Este projeto foi desenvolvido como um desafio para demonstrar habilidades em automação de testes utilizando o Cypress.

Índice
Visão Geral
Pré-requisitos
Como Clonar e Configurar
Como Instalar o Cypress
Executando os Testes
Estrutura do Projeto
Contato

# Visão Geral 🚀

Este projeto utiliza o Cypress para automatizar testes de interface e APIs, garantindo que os recursos da aplicação sejam testados de forma eficaz.

# Pré-requisitos 🚀

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

Node.js (versão 12 ou superior)
Git
Navegador Chrome, Firefox ou Edge
Editor de código (recomendado: VSCode)

# Como Clonar e Configurar 🚀

Siga os passos abaixo para baixar e configurar o projeto:

```bash
# Clone o repositório
git clone https://github.com/CaioROPS/automated-tests-cypress.git

# Acesse o diretório do projeto
cd challenge-cypress

--

## Como Instalar o Cypress 🚀
Instalação do Cypress

1. Acesse o diretório do projeto.
2. Crie uma pasta chamada "e2e" na raiz do projeto (se não existir).
3. Instale o Cypress dentro da pasta "e2e" utilizando o comando:

npm install cypress --save-dev

ou

yarn add cypress --dev

Isso garantirá que o Cypress seja instalado corretamente dentro da pasta "e2e", pronta para executar testes de ponta a ponta.
---

## Executando os Testes 🚀

Para executar os testes, você pode escolher entre duas opções:
# 1. Abra o Test Runner do Cypress
npx cypress open

# 2. Execute os testes em modo headless (sem interface gráfica)
npx cypress run

## Estrutura do Projeto 🚀
automated-tests-cypress/
├── cypress/
│   ├── e2e/             # Diretório onde ficam os testes automatizados (testes de ponta a ponta)
│   ├── fixtures/        # Arquivos de dados estáticos (ex: JSONs simulando dados de resposta)
│   ├── support/         # Comandos customizados e configurações globais
├── cypress.config.js    # Arquivo de configuração principal do Cypress (substitui o antigo cypress.json)
├── package.json         # Configurações do projeto e dependências do Node.js
├── package-lock.json    # Registro exato das versões das dependências instaladas
├── README.md            # Documentação do projeto
└── .gitignore           # Arquivos e pastas que devem ser ignorados pelo Git

##Contato 🚀
Caso tenha dúvidas ou precise de suporte, entre em contato:

Nome: Caio Ricardo
E-mail: caio.rops99@gmail.com
GitHub: CaioROPS
