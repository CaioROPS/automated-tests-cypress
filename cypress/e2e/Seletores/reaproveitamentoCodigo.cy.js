/// <reference types= 'cypress' />

import 'cypress-xpath'
import selectors from '../Seletores/seletores.cy.js';


export function login(email, senha) {
  cy.get(selectors.login.email).type(email);
  cy.get(selectors.login.password).type(senha);
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

export function preencherSenhas(senha_0, senha_1) {
  cy.get(selectors.userForm.passwordField).type(senha_0);
  cy.get(selectors.userForm.confirmPasswordField).type(senha_1);
}

export function preencherSenha1(senha) {
  cy.get(selectors.employeeForm.passwordField).type(senha);
  cy.get(selectors.employeeForm.confirmPasswordField).type(senha);
}