export const variables = {
  apiPort: process.env.API_PORT ?? 'undefined',
  corsOriginPermission: process.env.CORS_ORIGIN_PERMISSION ?? 'undefined',
  databaseUrl: process.env.DATABASE_URL ?? 'undefined',
  host: process.env.HOST ?? 'undefined',
  port: process.env.PORT ?? 'undefined'
}

export const testVariables = (): boolean => {
  return Object.values(variables).every((value) => {
    return (value !== 'undefined')
  })
}
