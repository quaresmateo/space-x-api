import { type HttpResponse } from '@/presentation/helpers'

export abstract class Controller {
  abstract perform (httpRequest: any): Promise<HttpResponse>

  async handle (httpRequest: any): Promise<HttpResponse> {
    try {
      return await this.perform(httpRequest)
    } catch (error) {
      console.log('Abstract Error: ', error)
      throw new Error(error as string)
    }
  }
}
