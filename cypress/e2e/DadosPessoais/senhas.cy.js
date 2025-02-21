/// <reference types= 'cypress' />

const credentials = {
    email: "Admin",
    senha: "admin123"
  };

  const credentialsFraca = {
    senhaF: "123"
  };

  const credentialsLimite = {
    senhaU: "12254testetestetestetestetetstetestetestetestetetsettetsettetsettetstetetstetetetestetstetetstettetstetetste"
  };
  
  const newCredentials = {
    senha: "senhaforte@123"
  };

  const notConfirm = {
    senha_0: "4senhaforte@123",
    senha_1: "naotacerta"
  };

  const credentialsColaborador = {
    senha: "123senhaforte"
  };

  export default { credentials, newCredentials, credentialsFraca, credentialsLimite, notConfirm, credentialsColaborador };
