export const environment = {
  production: false,
  auth:{

    clientID: 'iwwg6TakevfKzHBeqHi9XD7BXOExv9fN',
    domain: 'dev-bjevxqv0.us.auth0.com', // e.g., you.auth0.com
    audience: 'https://dev-bjevxqv0.us.auth0.com/api/v2/',
    auth0RedirectUri: 'http://localhost:4200/callback', // URL to return to after auth0 login
    auth0ReturnTo: 'http://localhost:4200', // URL to return to after auth0 logout
    scope: 'openid profile'
  
  }
};
