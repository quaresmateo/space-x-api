import { Controller } from '@/presentation/controllers/controller-abstract'
import { type HttpResponse, success, badRequest, notFound } from '@/presentation/helpers'
import { type ShowWelcomeMessageUseCase } from '@/domain/usecases'
import { NotFoundError } from '@/application/errors'

export class ShowWelcomeMessageController extends Controller {
  constructor (private readonly showWelcomeMessageService: ShowWelcomeMessageUseCase) {
    super()
  }

  override async perform (): Promise<HttpResponse> {
    const isMessageLoaded = await this.showWelcomeMessageService.perform()

    if (isMessageLoaded instanceof NotFoundError) return notFound(isMessageLoaded)

    return isMessageLoaded instanceof Error ? badRequest(isMessageLoaded) : success(isMessageLoaded)
  }
}
