/// <reference types= 'cypress' />

import 'cypress-xpath'
import credentials from '../DadosPessoais/senhas.cy';

describe('Fazer login com usuario cadastrado', () => {
    it.only('Deverá ser possivel logar com usuario Teste Automação', () => {
        
        //Acessar site
        cy.visit('https://signup.heroku.com/')
        cy.get('#onetrust-accept-btn-handler').click()

        //Acessar pagina de login
        cy.get('.header-login > .btn').click()

        //Digitar credenciais
        cy.get('#email').type(credentials.email)
        cy.get('#password').type(credentials.senha)

        //Logar
        cy.get('.btn').click()





    });
});