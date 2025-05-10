function fn() {
  var env = karate.env; // get system property 'karate.env'
  karate.log('karate.env system property was:', env);
  if (!env) {
    env = 'dev';
  }
  var config = {
    env: env,
    myVarName: 'someValue',
    BaseUrl:"https://sbadminv3.mzapi.mezzofy.com/business",

  }
  if (env == 'dev') {
    // customize
    // e.g. config.foo = 'bar';
  } else if (env == 'e2e') {
    // customize
  }
  var staticToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXJjaGFudF9jb2RlIjoiOFFZVSIsImlhdCI6MTczNTc5NzkzMCwiZXhwIjoxNzM1ODI2NzMwfQ.2KGozAzCF-Zk7s34wQ2aBHhTVmi-HvcHd0Zu0mjCpac';

  config.authHeaders = { Authorization: 'Bearer ' + staticToken };
  return config;
}