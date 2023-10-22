import { prepareParams } from '@/main/config/prepare-setup'
import { variables } from '@/main/config/variables'
import { exportSeedSchedule } from '@/infra/schedule'
import express, { type Response } from 'express'
import { PrismaClient } from '@prisma/client'
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'

const app = express()
const prisma = new PrismaClient()

try {
  const port = variables.apiPort

  const { isValidVariables, router, swaggerDefinition } = prepareParams()

  if (!isValidVariables) {
    console.error('Invalid variables')
    app.use((_, res) => {
      ServerError(res, 'Invalid variables')
    })
  }

  if (!router) {
    console.error('Invalid router')
    app.use((_, res) => {
      ServerError(res, 'Invalid router')
    })
  }

  if (!swaggerDefinition) {
    console.error('Invalid swaggerDefinition')
    app.use((_, res) => {
      ServerError(res, 'Invalid swaggerDefinition')
    })
  }

  const swaggerSpec = swaggerJSDoc(swaggerDefinition)
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

  exportSeedSchedule.start()

  app.use('/api', router)

  app.listen(port, () => {
    console.log(`🟢 Server is running on port ${port}`)
  })
} catch (error) {
  console.error(error)
  console.log('Desconnecting Prisma...')
  exportSeedSchedule.stop()
  prisma.$disconnect().then()
  app.use((_, res) => {
    ServerError(res, String(error))
  })
} finally {
  process.on('beforeExit', () => {
    console.log('Desconnecting Prisma...')
    exportSeedSchedule.stop()
    prisma.$disconnect().then()
  })
}

const ServerError = (res: Response, name: string): void => {
  res.status(500).send(`Internal server error: ${name}`)
}
