export const config = {
  urls: {
    login: 'https://admin.linkednet.com.au/login',
    signup: 'https://admin.linkednet.com.au/signup',
    admin: 'https://admin.linkednet.com.au/login'
  },
  company: {
    name: 'LinkedNet',
    email: 'hung.vm2574@gmail.com',
    address: {
      street: '33 Nanovich Ave',
      city: 'Girrawheen',
      state: 'Western Australia'
    },
    phone: '0401070232'
  },
  web3forms: {
    apiKey: 'a2b4f9ac-6e94-47b6-91a2-96099b689c9f'
  }
} as const;

// Type-safe access to config values
export type Config = typeof config;