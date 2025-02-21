/// <reference types= 'cypress' />

import 'cypress-xpath'
import { login, preencherUsuario, preencherSenha, editarSenha, preencherSenhas, preencherSenha1 } from '../Seletores/reaproveitamentoCodigo.cy.js';
import selectors from '../Seletores/seletores.cy.js';
import { credentials, newCredentials, credentialsFraca, credentialsLimite, notConfirm, credentialsColaborador } from '../DadosPessoais/senhas.cy.js';
import { faker } from '@faker-js/faker';



describe('Validações de Cadastro/Edição/Remoção', () => {   

        it('Cadastro colaborador PIM', () => {
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
          cy.get(selectors.employeeForm.firstName).click().type('Trevor')
          cy.get(selectors.employeeForm.lastName).type('Santos')

          // Criação de senha para colaborador
          cy.get(selectors.employeeForm.createLoginDatails).click()
          cy.get(selectors.employeeForm.usernameField).type('Trevor')

          preencherSenha1(credentialsColaborador.senha)
          
          cy.get(selectors.employeeForm.saveButton).click()

          // Verificar sucesso
          cy.wait(1000)
          cy.get(selectors.toastMessage).should('contain', 'Success')
          cy.screenshot('cadastrado_com_sucesso')


        });
  
        it('Deve cadastrar/editar/remover um novo usuário ADMIN com sucesso', () => {
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
        
            preencherUsuario('Trevor')
        
            cy.xpath(selectors.userForm.statusDropdown).click()
            cy.get(selectors.userForm.statusActiveOption).click()
        
            cy.get(selectors.userForm.usernameField).type(randomFullName)
        
            // Criar senha
            preencherSenha(credentials.senha)
        
            cy.get(selectors.userForm.saveButton).click()
        
            // Verificar sucesso
            cy.wait(1000)
            cy.get(selectors.toastMessage).should('be.visible')
            cy.screenshot('cadastrado_com_sucesso');


            // Editar usuário
            cy.xpath("//div[contains(@class, 'oxd-table-row')][.//div[text()='Trevor Santos']]//i[contains(@class, 'bi-pencil-fill')]").first().click()
            cy.wait(2000)
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
            cy.xpath("//div[contains(@class, 'oxd-table-row')][.//div[text()='Trevor Santos']]//i[contains(@class, 'bi-trash')]").first().click();
            cy.get('.oxd-button--label-danger > .oxd-icon').click()

            // Verificar sucesso
            cy.wait(1000)
            cy.get(selectors.toastMessage).should('contain', 'Success')
            cy.screenshot('removido_com_sucesso')

            // Fazer logout
            cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
            cy.get(':nth-child(4) > .oxd-userdropdown-link').click()

            // Verificar sucesso
            cy.wait(1500)
            cy.get('.oxd-button').should('contain', 'Login')
            cy.screenshot('sucesso')

          });


          it('Cadastro de usuario com user name não respeitando valor minimo de caracteres', () => {
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
        
            preencherUsuario('Trevor')
        
            cy.xpath(selectors.userForm.statusDropdown).click()
            cy.get(selectors.userForm.statusActiveOption).click()
        
            cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Ana')
        
            // Criar senha
            preencherSenha(credentials.senha)
        
            cy.get(selectors.userForm.saveButton).click()
        
            // Verificar sucesso
            cy.wait(2000)
            cy.get(selectors.toastMessageInvalido).should('be.visible')
            cy.screenshot('Não foi possivel cadastrar')

          });

          it('Cadastro de usuario ADMIN com user name em branco', () => {
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
        
            preencherUsuario('Trevor')
        
            cy.xpath(selectors.userForm.statusDropdown).click()
            cy.get(selectors.userForm.statusActiveOption).click()
        
        
            // Criar senha
            preencherSenha(credentials.senha);
        
            cy.get(selectors.userForm.saveButton).click()
        
            // Verificar sucesso
            cy.wait(2000)
            cy.get('.oxd-input-group > .oxd-text').should('contain', 'Required')
            cy.screenshot('Não foi possivel cadastrar')

          });

          it('Cadastro de usuario ADMIN com senha fraca', () => {
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
        
            preencherUsuario('Trevor')
        
            cy.xpath(selectors.userForm.statusDropdown).click()
            cy.get(selectors.userForm.statusActiveOption).click()
        
            cy.get(selectors.userForm.usernameField).type(randomFullName)
        
            // Criar senha
            preencherSenha(credentialsFraca.senhaF)
        
            cy.get(selectors.userForm.saveButton).click()
        
            // Verificar sucesso
            cy.wait(2000)
            cy.get('.oxd-input-group > .oxd-text').should('contain', 'Should have at least 7 characters')
            cy.screenshot('Não foi possivel cadastrar')


          });

          it('Cadastro de usuario ADMIN com senha ultrapassando valor maximo de caracteres', () => {
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
        
            preencherUsuario('Trevor')
        
            cy.xpath(selectors.userForm.statusDropdown).click()
            cy.get(selectors.userForm.statusActiveOption).click()
        
            cy.get(selectors.userForm.usernameField).type(randomFullName)
        
            // Criar senha
            preencherSenha(credentialsLimite.senhaU)
        
            cy.get(selectors.userForm.saveButton).click()
        
            // Verificar sucesso
            cy.wait(2000)
            cy.get(selectors.toastMessageLimite).should('contain', 'Should not exceed 64 characters')
            cy.screenshot('Não foi possivel cadastrar')


          });

          it('Cadastro de usuario ADMIN com senha de confirmação diferente', () => {
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
        
            preencherUsuario('Trevor')
        
            cy.xpath(selectors.userForm.statusDropdown).click()
            cy.get(selectors.userForm.statusActiveOption).click()
        
            cy.get(selectors.userForm.usernameField).type(randomFullName)
        
            // Criar senha
            preencherSenhas(notConfirm.senha_0, notConfirm.senha_1)
        
            cy.get(selectors.userForm.saveButton).click()
        
            // Verificar sucesso
            cy.wait(2000)
            cy.get('.oxd-input-group > .oxd-text').should('contain', 'Passwords do not match')
            cy.screenshot('Não foi possivel cadastrar')


          });

          it('Remover colaborador PIM', () => {
            const randomFullName = faker.person.fullName()
            cy.log(randomFullName)
  
            // Acessar site
            cy.visit('https://opensource-demo.orangehrmlive.com/')
  
            // Acessar como admin
            login(credentials.email, credentials.senha)
  
            // Acessar cadastro de colaboradores
            cy.xpath(selectors.menuPim.employeeTab).click()

            // Pesquisar colaborador
            cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').type('Trevor')
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