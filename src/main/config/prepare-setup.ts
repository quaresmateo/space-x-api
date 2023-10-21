import { routes } from '@/main/config/routes'
import { testVariables } from '@/main/config/variables'
import { type Controller } from '@/presentation/controllers/controller-abstract'
import { Router, type Request, type Response } from 'express'

export const prepareParams = (): PrepareParamsType => {
  const isValidVariables = testVariables()
  const router = Router()

  routes.forEach((route) => {
    ;(router as any)[route.method](route.path, handleController(route.controller))
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
