import { prepareParams } from '@/main/config/prepare-setup'
import { variables } from '@/main/config/variables'
import express from 'express'

const app = express()
const router = express.Router()

try {
  const port = variables.apiPort

  const { isValidVariables } = prepareParams()
  if (!isValidVariables) {
    console.error('Invalid variables')
    app.use(
      (req: any, res: any) => { ServerError(res, 'Invalid variables') }
    )
  }

  app.use('/api', router)

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  })
} catch (error) {
  console.error(error)
  app.use(
    (req: any, res: any) => { ServerError(res, String(error)) }
  )
}

const ServerError = (res: any, name: string): void => {
  res.status(500).send(`Internal server error: ${name}`)
}
