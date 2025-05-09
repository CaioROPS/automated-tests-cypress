/// <reference types= 'cypress' />

import 'cypress-xpath'

export const selectors = {
    login: {
        email: ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',
        password: ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input',
        loginButton: '.oxd-button',
    },
    menu: {
        adminTab: ':nth-child(1) > .oxd-main-menu-item > .oxd-text',
        addButton: '.oxd-button > .oxd-icon',
    },
    userForm: {
        userRoleDropdown: ':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon',
        adminOption: '.oxd-select-option',
        employeeNameField: "//input[@placeholder='Type for hints...']",
        statusDropdown: "//div[contains(text(), '-- Select --')]",
        statusActiveOption: '.oxd-select-dropdown > :nth-child(2) > span',
        usernameField: ':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input',
        passwordField: '.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input',
        confirmPasswordField: ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',
        saveButton: '.oxd-button--secondary',
    },

    menuPim: {
        employeeTab: "//li[contains(@class, 'oxd-main-menu-item-wrapper')]//a[contains(@class, 'oxd-main-menu-item') and @href='/web/index.php/pim/viewPimModule']//span[text()='PIM']",
        addButton: '.orangehrm-header-container > .oxd-button',
    },

    employeeForm: {
        firstName: '.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input',
        lastName: ':nth-child(3) > :nth-child(2) > .oxd-input',
        createLoginDatails: '.oxd-switch-input',
        usernameField: ':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
        passwordField: '.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input',
        confirmPasswordField: '.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',
        saveButton: '.oxd-button--secondary',
    },


    userEdit: {
        statusDropdown: "//div[contains(@class, 'oxd-select-text') and contains(@class, 'oxd-select-text--active')]//div[contains(@class, 'oxd-select-text-input') and text()='Enabled']",
        statusInactiveOption: '.oxd-select-dropdown > :nth-child(3) > span',
        usernameFieldEdit: ':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input',
        changePassword: '.oxd-checkbox-input > .oxd-icon',
        editPassword: '.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input',
        confirmEditPassword: ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',
        saveButton: '.oxd-button--secondary',
    },

    toastMessage: '.oxd-text--toast-title', 
    toastMessageF: '.user-password-cell > .oxd-input-group > .oxd-text',
    toastMessageInvalido: ':nth-child(4) > .oxd-input-group > .oxd-text',
    toastMessageLimite: '.user-password-cell > .oxd-input-group > .oxd-text',
    toastMessageUserUltrapassou: ':nth-child(4) > .oxd-input-group > .oxd-text',
  }

  export default selectors;
