export const variables = {
  host: process.env.HOST ?? 'undefined',
  apiPort: process.env.API_PORT ?? 'undefined',
  corsOriginPermission: process.env.CORS_ORIGIN_PERMISSION ?? 'undefined',
  databaseUrl: process.env.DATABASE_URL ?? 'undefined'
}

export const testVariables = (): boolean => {
  return Object.values(variables).every((value) => {
    return (value !== 'undefined')
  })
}
