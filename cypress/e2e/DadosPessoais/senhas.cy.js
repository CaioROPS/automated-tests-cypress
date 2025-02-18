/// <reference types= 'cypress' />

const credentials = {
    email: "Admin",
    senha: "admin123"
  };

  const credentialsFraca = {
    senhaF: "123"
  };

  const credentialsLimite = {
    senhaU: "1235444dwjndjwnjdnwjdnjwdw7844d8wd8w4dw848dw8448wdwdnjwddwdwdwjjnnndfnwidwimmksdw5454w1d84dw545dw448wd444dwdkwmwd"
  };
  
  const newCredentials = {
    senha: "senhaforte@123"
  };

  export default { credentials, newCredentials, credentialsFraca, credentialsLimite };
