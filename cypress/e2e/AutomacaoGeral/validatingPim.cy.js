/// <reference types= 'cypress' />

import 'cypress-xpath'
import { login, preencherUsuario, preencherSenha, editarSenha, preencherSenhas, preencherSenha1 } from '../Seletores/reaproveitamentoCodigo.cy.js';
import selectors from '../Seletores/seletores.cy.js';
import { credentials, newCredentials, credentialsFraca, credentialsLimite, notConfirm, credentialsColaborador } from '../DadosSensiveis/senhas.cy.js';
import { faker } from '@faker-js/faker';
import { employee } from '../DadosPessoais/info.cy.js';


describe('Validações de Cadastro/Edição/Remoção', () => {

  it('Cadastro colaborador PIM first name em branco', () => {
    const randomFullName = faker.person.fullName()
    cy.log(randomFullName)

    // Acessar site
    cy.visit('https://opensource-demo.orangehrmlive.com/')

    // Acessar como admin
    login(credentials.email, credentials.senha)

    // Acessar cadastro de colaboradores
    cy.xpath(selectors.menuPim.employeeTab).click()
    cy.get(selectors.menuPim.addButton).click()

    // Cadastrar um colaborador
    cy.get(selectors.employeeForm.lastName).type(employee.lastName)

    cy.get(selectors.employeeForm.saveButton).click()

    // Verificar sucesso
    cy.wait(2000)
    cy.get('.--name-grouped-field > :nth-child(1) > .oxd-text').should('contain', 'Required')
    cy.screenshot('Não foi possivel cadastrar')

  });

  it('Cadastro colaborador PIM last name em branco', () => {
    const randomFullName = faker.person.fullName()
    cy.log(randomFullName)

    // Acessar site
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.wait(2000)

    // Acessar como admin
    login(credentials.email, credentials.senha)

    // Acessar cadastro de colaboradores
    cy.xpath(selectors.menuPim.employeeTab).click()
    cy.get(selectors.menuPim.addButton).click()

    // Cadastrar um colaborador
    cy.get(selectors.employeeForm.firstName).click().type(employee.firstName)

    cy.get(selectors.employeeForm.saveButton).click()

    // Verificar sucesso
    cy.wait(2000)
    cy.get('.--name-grouped-field > :nth-child(3) > .oxd-text').should('contain', 'Required')
    cy.screenshot('Não foi possivel cadastrar')

  });

  it('Cadastro colaborador PIM first name ultrapassando limite maximo de caracteres', () => {
    const randomFullName = faker.person.fullName()
    cy.log(randomFullName)

    // Acessar site
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.wait(2000)

    // Acessar como admin
    login(credentials.email, credentials.senha)

    // Acessar cadastro de colaboradores
    cy.xpath(selectors.menuPim.employeeTab).click()
    cy.get(selectors.menuPim.addButton).click()

    // Cadastrar um colaborador
    cy.get(selectors.employeeForm.firstName).click().type('Trevor teste de mais de 30 caracteres no first name')
    cy.get(selectors.employeeForm.lastName).type(employee.lastName)

    cy.get(selectors.employeeForm.saveButton).click()

    // Verificar sucesso
    cy.wait(2000)
    cy.get('.--name-grouped-field > :nth-child(1) > .oxd-text').should('contain', 'Should not exceed 30 characters')
    cy.screenshot('Não foi possivel cadastrar')

  });

  it('Cadastro colaborador PIM middle name ultrapassando limite maximo de caracteres', () => {
    const randomFullName = faker.person.fullName()
    cy.log(randomFullName)

    // Acessar site
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.wait(2000)

    // Acessar como admin
    login(credentials.email, credentials.senha)

    // Acessar cadastro de colaboradores
    cy.xpath(selectors.menuPim.employeeTab).click()
    cy.get(selectors.menuPim.addButton).click()

    // Cadastrar um colaborador
    cy.get(selectors.employeeForm.firstName).click().type(employee.firstName)
    cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type('teste de mais de 30 caracteres no middle name')
    cy.get(selectors.employeeForm.lastName).type(employee.lastName)

    cy.get(selectors.employeeForm.saveButton).click()

    // Verificar sucesso
    cy.wait(2000)
    cy.get('.--name-grouped-field > :nth-child(2) > .oxd-text').should('contain', 'Should not exceed 30 characters')
    cy.screenshot('Não foi possivel cadastrar')

  });

  it('Cadastro colaborador PIM last name ultrapassando limite maximo de caracteres', () => {
    const randomFullName = faker.person.fullName()
    cy.log(randomFullName)

    // Acessar site
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.wait(2000)

    // Acessar como admin
    login(credentials.email, credentials.senha)

    // Acessar cadastro de colaboradores
    cy.xpath(selectors.menuPim.employeeTab).click()
    cy.get(selectors.menuPim.addButton).click()

    // Cadastrar um colaborador
    cy.get(selectors.employeeForm.firstName).click().type(employee.firstName)
    cy.get(selectors.employeeForm.lastName).type('teste de mais de 30 caracteres no last name')

    cy.get(selectors.employeeForm.saveButton).click()

    // Verificar sucesso
    cy.wait(2000)
    cy.get('.--name-grouped-field > :nth-child(3) > .oxd-text').should('contain', 'Should not exceed 30 characters')
    cy.screenshot('Não foi possivel cadastrar')

  });

  it('Cadastro colaborador PIM Username em branco (login details)', () => {
    const randomFullName = faker.person.fullName()
    cy.log(randomFullName)

    // Acessar site
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.wait(2000)

    // Acessar como admin
    login(credentials.email, credentials.senha)

    // Acessar cadastro de colaboradores
    cy.xpath(selectors.menuPim.employeeTab).click()
    cy.get(selectors.menuPim.addButton).click()

    // Cadastrar um colaborador
    cy.get(selectors.employeeForm.firstName).click().type(employee.firstName)
    cy.get(selectors.employeeForm.lastName).type(employee.lastName)

    // Criação de senha para colaborador
    cy.get(selectors.employeeForm.createLoginDatails).click()

    preencherSenha1(credentialsColaborador.senha)

    cy.get(selectors.employeeForm.saveButton).click()

    // Verificar sucesso
    cy.wait(1000)
    cy.get('.oxd-input-group > .oxd-text').should('contain', 'Required')
    cy.screenshot('Não foi possivel cadastrar')

  });

  it('Cadastro colaborador PIM Username não respeitando valor minimo de caracteres (login details)', () => {
    const randomFullName = faker.person.fullName()
    cy.log(randomFullName)

    // Acessar site
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.wait(2000)

    // Acessar como admin
    login(credentials.email, credentials.senha)

    // Acessar cadastro de colaboradores
    cy.xpath(selectors.menuPim.employeeTab).click()
    cy.get(selectors.menuPim.addButton).click()

    // Cadastrar um colaborador
    cy.get(selectors.employeeForm.firstName).click().type(employee.firstName)
    cy.get(selectors.employeeForm.lastName).type(employee.lastName)

    // Criação de senha para colaborador
    cy.get(selectors.employeeForm.createLoginDatails).click()
    cy.get(selectors.employeeForm.usernameField).type('Tre')

    preencherSenha1(credentialsColaborador.senha)

    cy.get(selectors.employeeForm.saveButton).click()

    // Verificar sucesso
    cy.wait(1000)
    cy.get('.oxd-input-group > .oxd-text').should('contain', 'Should be at least 5 characters')
    cy.screenshot('Não foi possivel cadastrar')

  });

  it('Cadastro colaborador PIM Username não respeitando valor maximo de caracteres (login details)', () => {
    const randomFullName = faker.person.fullName()
    cy.log(randomFullName)

    // Acessar site
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.wait(2000)

    // Acessar como admin
    login(credentials.email, credentials.senha)

    // Acessar cadastro de colaboradores
    cy.xpath(selectors.menuPim.employeeTab).click()
    cy.get(selectors.menuPim.addButton).click()

    // Cadastrar um colaborador
    cy.get(selectors.employeeForm.firstName).click().type(employee.firstName)
    cy.get(selectors.employeeForm.lastName).type(employee.lastName)

    // Criação de senha para colaborador
    cy.get(selectors.employeeForm.createLoginDatails).click()
    cy.get(selectors.employeeForm.usernameField).type('Trevor teste limite de 40 caracteres ultrapassado')

    preencherSenha1(credentialsColaborador.senha)

    cy.get(selectors.employeeForm.saveButton).click()

    // Verificar sucesso
    cy.wait(1000)
    cy.get('.oxd-input-group > .oxd-text').should('contain', 'Should not exceed 40 characters')
    cy.screenshot('cadastrado_com_sucesso')


  });

  it('Cadastro colaborador PIM', () => {
    const randomFullName = faker.person.fullName()
    cy.log(randomFullName)

    // Acessar site
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.wait(2000)

    // Acessar como admin
    login(credentials.email, credentials.senha)

    // Acessar cadastro de colaboradores
    cy.xpath(selectors.menuPim.employeeTab).click()
    cy.get(selectors.menuPim.addButton).click()

    // Cadastrar um colaborador
    cy.get(selectors.employeeForm.firstName).click().type(employee.firstName)
    cy.get(selectors.employeeForm.lastName).type(employee.lastName)

    // Criação de senha para colaborador
    cy.get(selectors.employeeForm.createLoginDatails).click()
    cy.get(selectors.employeeForm.usernameField).type(employee.firstName)

    preencherSenha1(credentialsColaborador.senha)

    cy.get(selectors.employeeForm.saveButton).click()

    // Verificar sucesso
    cy.wait(1000)
    cy.get(selectors.toastMessage).should('contain', 'Success')
    cy.screenshot('cadastrado_com_sucesso')

  });


  it('Remover colaborador PIM', () => {
    const randomFullName = faker.person.fullName()
    cy.log(randomFullName)

    // Acessar site
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.wait(2000)

    // Acessar como admin
    login(credentials.email, credentials.senha)

    // Acessar cadastro de colaboradores
    cy.xpath(selectors.menuPim.employeeTab).click()

    // Pesquisar colaborador
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').type(employee.firstName)
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()

    // Deletar colaborador
    cy.xpath("//div[contains(@class, 'oxd-table-row')][.//div[text()='Trevor ']][.//div[text()='Santos']]//i[contains(@class, 'bi-trash')]").first().click()
    cy.get('.oxd-button--label-danger').click()

    // Verificar sucesso
    cy.wait(1000)
    cy.get(selectors.toastMessage).should('contain', 'Success')
    cy.screenshot('cadastrado_com_sucesso')

  });
});
