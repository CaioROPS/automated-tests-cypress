/// <reference types= 'cypress' />

import 'cypress-xpath'
import  selectors  from '../Seletores/seletores.cy.js';

export function login(email, senha) {
    cy.get(selectors.login.email).type('Admin');
    cy.get(selectors.login.password).type('admin123');
    cy.get(selectors.login.loginButton).click();
  }
  
  export function preencherUsuario(nome) {
    cy.xpath(selectors.userForm.employeeNameField).type(nome);
    cy.wait(1000);
    cy.get('.oxd-autocomplete-option').first().click();
  }
  
  export function preencherSenha(senha) {
    cy.get(selectors.userForm.passwordField).type(senha);
    cy.get(selectors.userForm.confirmPasswordField).type(senha);
  }

  export function editarSenha(senha) {
    cy.get(selectors.userEdit.editPassword).type(senha);
    cy.get(selectors.userEdit.confirmEditPassword).type(senha);
  }

