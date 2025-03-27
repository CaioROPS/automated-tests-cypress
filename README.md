Automação de Testes com Cypress - CRUD de Usuários

📖 Descrição

Este projeto implementa testes automatizados utilizando Cypress para validar um fluxo completo de CRUD de usuários na plataforma OrangeHRM. O objetivo é garantir a integridade e funcionalidade das operações de cadastro, edição e remoção de usuários administradores.


Tecnologias Utilizadas

- Cypress: Framework de testes E2E.

- Faker.js: Geração dinâmica de dados.

- Cypress Xpath: Suporte para seletores XPath.

 Funcionalidades Testadas

- Cadastro de colaborador 

- Cadastro de colaborador Username não respeitando valor maximo de caracteres 

- Cadastro de colaborador Username não respeitando valor minimo de caracteres
- 
- Cadastro de colaborador Username em branco 

- Cadastro de colaborador first name em branco 

- Cadastro de colaborador last name em branco 

- Cadastro de colaborador first name não respeitando valor maximo de caracteres 

- Cadastro de colaborador middle name não respeitando valor maximo de caracteres 

- Cadastro de colaborador last name não respeitando valor maximo de caracteres 
  
- Login como administrador 

- Cadastro de novo usuário administrador (com geração de nome dinâmico) 

- Edição de usuário administrador (alteração de status e redefinição de senha) 

- Exclusão de usuário administrador 

- Validação de mensagens de sucesso 

- Captura de screenshots em cada etapa
- 
- Validação de cadastro com username inválido usuário administrador 

- Validação de cadastro com username em branco usuário administrador 

- Validação de cadastro com senha fraca usuário administrador 

- Validação de cadastro com senha ultrapassando o limite de caracteres usuário administrador 

- Exclusão de colaborador 

 
 Boas Práticas Aplicadas
- Modularização: Separação de seletores, funções reutilizáveis e credenciais. 

- Reutilização de código: Importação de funções para manter os testes limpos e escaláveis. 

- Assertividade: Validação das ações realizadas, garantindo confiabilidade nos testes. 

- Facilidade de manutenção: Código organizado e separado por responsabilidade. 


 Execução dos Testes

Clone o repositório:
git clone https://github.com/seu-usuario/seu-repositorio.git

Instale as dependências:
npm install

Execute os testes:
npx cypress open

ou em modo headless:
npx cypress run


 Contribuições
Sugestões e melhorias são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.


Feedbacks são sempre bem-vindos! 


#Cypress #TestesAutomatizados #QA #BoasPráticas #Automação
