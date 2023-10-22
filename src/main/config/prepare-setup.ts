import { routes } from '@/main/config/routes'
import { testVariables, variables } from '@/main/config/variables'
import { type Controller } from '@/presentation/controllers/controller-abstract'
import { Router, type Request, type Response } from 'express'

export const prepareParams = (): PrepareParamsType => {
  const isValidVariables = testVariables()
  const router = Router()

  routes.forEach((route) => {
    (router as any)[route.method](route.path, handleController(route.controller))
  })

  const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
      title: 'Sua API',
      version: '1.0.0',
      description: 'Documentação Space X Launches API'
    },
    servers: [
      {
        url: `http://${variables.host}:${variables.port}/api`
      }
    ]
  }
  const options = {
    swaggerDefinition,
    apis: ['./src/main/docs/**/*.yml']
  }

  return {
    isValidVariables,
    router,
    swaggerDefinition: options
  }
}

const handleController = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    try {
      const payload = {
        ...(req.body || {}),
        ...(req.params || {}),
        ...(req.query || {})
      }
      const httpResponse = await controller.handle(payload)
      res.status(httpResponse.statusCode).json(httpResponse.data)
    } catch (error) {
      console.error('Erro:', error)
      res.status(500).json({ error: 'An internal error has occurred.' })
    }
  }
}

type PrepareParamsType = {
  isValidVariables: boolean
  router: Router
  swaggerDefinition: any
}
