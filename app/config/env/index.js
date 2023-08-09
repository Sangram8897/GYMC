export const ActiveEnv = 'CLOUD_UAT'
export const Envs = {
  BOI_UAT: {
    host: 'https://epl-staraks.beta.bankofindia.co.in/',
    hostTest: 'https://epl-staraksapi.beta.bankofindia.co.in/'
  },
  CLOUD_UAT: {
    host: 'https://boi.sandbox.integreat.perfios.com/',
    hostTest: 'https://boi-api.sandbox.integreat.perfios.com',
  },
  OP_UAT: {
    host: 'https://epl-staraks.beta.bankofindia.co.in/',
    hostTest: 'https://epl-staraksapi.beta.bankofindia.co.in/',
    encdecKey: 'BOI$#@$^@1ERF',
  },
  CLOUD: {
    host: 'https://boi.test.integreat.perfios.com/',
    hostTest: 'https://boi-api.test.integreat.perfios.com/',
  },
  PROD: {
    host: 'https://epl-staraks.bankofindia.co.in/',
    hostTest: 'https://epl-staraksapi.bankofindia.co.in',
  },
  SIT: {
    host: 'https://epl-staraks.test.bankofindia.co.in/',
    hostTest: 'https://epl-staraksapi.test.bankofindia.co.in/',
  },
  VAPT: {
    host: 'https://dlp.sandbox.integreat.perfios.com/',
    hostTest: 'https://dlp-api.sandbox.integreat.perfios.com/',
  },
  IDBI: {
    host: 'https://idbi.test.integreat.perfios.com/',
    hostTest: 'https://idbi-api.test.integreat.perfios.com/',
  }
}