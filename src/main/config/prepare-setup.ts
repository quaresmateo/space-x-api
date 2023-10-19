import { routes } from '@/main/config/routes'
import { testVariables } from '@/main/config/variables'
import { Router, type Request, type Response } from 'express'

export const prepareParams = (): PrepareParamsType => {
  const isValidVariables = testVariables()
  const router = Router()

  routes.forEach((route) => {
    (router as any)[route.method](route.path, handleController(route.controller))
  })

  return {
    isValidVariables,
    router
  }
}

type PrepareParamsType = {
  isValidVariables: boolean
  router: Router
}

const handleController = (controller: any) => {
  return async (req: Request, res: Response) => {
    try {
      const httpResponse = await controller.handle(req)
      res.status(httpResponse.statusCode).json(httpResponse.data)
    } catch (error) {
      console.error('Erro:', error)
      res.status(500).json({ error: 'An internal error has occurred.' })
    }
  }
}
