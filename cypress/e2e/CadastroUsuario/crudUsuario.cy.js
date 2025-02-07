/// <reference types= 'cypress' />

import 'cypress-xpath'
import { login, preencherUsuario, preencherSenha, editarSenha } from '../Seletores/reaproveitamentoCodigo.cy.js';
import selectors from '../Seletores/seletores.cy.js';
import { credentials, newCredentials } from '../DadosPessoais/senhas.cy.js';
import { faker } from '@faker-js/faker';



describe('Acessar como admin', () => {   

        it('Deve cadastrar um novo usuário ADMIN com sucesso', () => {
            const randomFullName = faker.person.fullName()
            cy.log(randomFullName)
        
            // Acessar site
            cy.visit('https://opensource-demo.orangehrmlive.com/')
        
            // Acessar como admin
            login(credentials.email, credentials.senha)
        
            // Acessar cadastro de novos usuários
            cy.get(selectors.menu.adminTab).click()
            cy.get(selectors.menu.addButton).click()
        
            // Cadastrar usuário
            cy.get(selectors.userForm.userRoleDropdown).click()
            cy.get(selectors.userForm.adminOption).contains('Admin').click()
        
            preencherUsuario('Chri')
        
            cy.xpath(selectors.userForm.statusDropdown).click()
            cy.get(selectors.userForm.statusActiveOption).click()
        
            cy.get(selectors.userForm.usernameField).type(randomFullName)
        
            // Criar senha
            preencherSenha(credentials.senha);
        
            cy.get(selectors.userForm.saveButton).click()
        
            // Verificar sucesso
            cy.wait(1000)
            cy.get(selectors.toastMessage).should('contain', 'Success')
            cy.screenshot('cadastrado_com_sucesso');


            // Editar usuário
            cy.xpath("//div[contains(@class, 'oxd-table-row')][.//div[text()='Christopher Mcmillan']]//i[contains(@class, 'bi-pencil-fill')]").first().click()
            cy.xpath(selectors.userEdit.statusDropdown).click()
            cy.get(selectors.userEdit.statusInactiveOption).click()
            cy.get(selectors.userEdit.usernameFieldEdit).type(randomFullName)

            // Editar senha
            cy.get(selectors.userEdit.changePassword).click()

            editarSenha(newCredentials.senha)

            cy.get(selectors.userForm.saveButton).click()

            // Verificar sucesso
            cy.wait(1000)
            cy.get(selectors.toastMessage).should('contain', 'Success')
            cy.screenshot('editado_com_sucesso');


            // Deletar usuário
            cy.xpath("//div[contains(text(), 'Christopher Mcmillan')]/ancestor::div[contains(@class, 'oxd-table-row')]//i[contains(@class, 'bi-trash')]").first().click();
            cy.get('.oxd-button--label-danger').click()

            // Verificar sucesso
            cy.wait(1000)
            cy.get(selectors.toastMessage).should('contain', 'Success')
            cy.screenshot('removido_com_sucesso')

            // Fazer logout
            cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
            cy.get(':nth-child(4) > .oxd-userdropdown-link').click()

            // Verificar sucesso
            cy.wait(1500)
            cy.get('.oxd-text--h5').should('contain', 'Login')
            cy.screenshot('sucesso')

          });


});