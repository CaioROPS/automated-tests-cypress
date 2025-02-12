/// <reference types= 'cypress' />

const credentials = {
    email: "Admin",
    senha: "admin123"
  };

  const credentialsFraca = {
    senhaF: "123"
  };
  
  const newCredentials = {
    senha: "senhaforte@123"
  };

  const credentialsInvalida = {
    userName: "Ana"
  };
  export default { credentials, newCredentials, credentialsFraca, credentialsInvalida };
