import { type HttpResponse } from '@/presentation/helpers'

export abstract class Controller {
  abstract perform (httpRequest: any): Promise<HttpResponse>

  async handle (payload: [key: string]): Promise<HttpResponse> {
    try {
      return await this.perform(payload)
    } catch (error) {
      console.log('Abstract Error: ', error)
      throw new Error(error as string)
    }
  }
}
