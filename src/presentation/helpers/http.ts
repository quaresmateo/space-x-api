import { type CorsConfig } from '@/main/config/cors'

export type HttpResponse<T = any> = {
  statusCode: number
  data: T
}

export type HttpLambdaResponse<T = any> = {
  statusCode: number
  body: T
  headers: CorsConfig
}

export const success = <T = any>(data: T): HttpResponse<T> => ({
  statusCode: 200,
  data
})

export const noContent = (): HttpResponse => ({
  statusCode: 204,
  data: null
})

export const badRequest = (error: Error): HttpResponse<Error> => ({
  statusCode: 400,
  data: error
})

export const notFound = (error: Error): HttpResponse<Error> => ({
  statusCode: 404,
  data: error
})

export const serverError = (error: unknown): HttpResponse<Error> => ({
  statusCode: 500,
  data: error as Error
})
