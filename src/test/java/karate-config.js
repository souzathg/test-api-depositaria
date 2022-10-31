function fn() {
  let env = karate.env; // get system property 'karate.env'
  karate.log('karate.env system property was:', env);
  if (!env) {
    env = 'dev';
  }
  let config = {
    baseURL: "http://localhost:3000/depositaria",
    clientId: "36353816000146",
    clientSecret: "5777cc02-a35b-4360-8e1c-d3697519d83c"
  }
  if (env == 'dev') {
    // customize
    // e.g. config.foo = 'bar';
  } else if (env == 'e2e') {
    // customize
  }

  let auth = karate.callSingle("classpath:authentication/auth.feature", config);
  config.token = auth.token;

  karate.configure("logPrettyRequest", true);
  karate.configure("logPrettyResponse", true);

  return config;
}
