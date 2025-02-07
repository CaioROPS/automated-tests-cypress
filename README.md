📌 Automação de Testes com Cypress - CRUD de Usuários
📖 Descrição
Este projeto implementa testes automatizados utilizando Cypress para validar um fluxo completo de CRUD de usuários na plataforma OrangeHRM. O objetivo é garantir a integridade e funcionalidade das operações de cadastro, edição e remoção de usuários administradores.

⚙️ Tecnologias Utilizadas
Cypress: Framework de testes E2E.
Faker.js: Geração dinâmica de dados.
Cypress Xpath: Suporte para seletores XPath.

🚀 Funcionalidades Testadas
✅ Login como administrador
✅ Cadastro de novo usuário (com geração de nome dinâmico)
✅ Edição de usuário (alteração de status e redefinição de senha)
✅ Exclusão de usuário
✅ Validação de mensagens de sucesso
✅ Captura de screenshots em cada etapa

🏗 Estrutura do Código
📂 cypress
 ┣ 📂 e2e
 ┃ ┣ 📂 CadastroUsuario
 ┃ ┃ ┗ 📜 cadastro.cy.js  # Testes completos de CRUD
 ┣ 📂 Seletores
 ┃ ┣ 📜 seletores.cy.js  # Mapeamento de elementos
 ┃ ┗ 📜 reaproveitamentoCodigo.cy.js  # Funções reutilizáveis (login, preenchimento de dados)
 ┣ 📂 DadosPessoais
 ┃ ┗ 📜 senhas.cy.js  # Credenciais usadas nos testes
 
📌 Boas Práticas Aplicadas
✅ Modularização: Separação de seletores, funções reutilizáveis e credenciais.
✅ Reutilização de código: Importação de funções para manter os testes limpos e escaláveis.
✅ Assertividade: Validação das ações realizadas, garantindo confiabilidade nos testes.
✅ Facilidade de manutenção: Código organizado e separado por responsabilidade.

🔧 Execução dos Testes

Clone o repositório:
git clone https://github.com/seu-usuario/seu-repositorio.git

Instale as dependências:
npm install

Execute os testes:
npx cypress open

ou em modo headless:
npx cypress run

📌 Contribuições
Sugestões e melhorias são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

📢 Feedbacks são sempre bem-vindos! 🚀
#Cypress #TestesAutomatizados #QA #BoasPráticas #Automação
