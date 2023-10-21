import { badRequest, notFound, success, type HttpResponse } from '@/presentation/helpers'
import { Controller } from '@/presentation/controllers/controller-abstract'
import { type ListLauchesDTO } from '@/presentation/presenter/dtos'
import { type ListLaunchesUseCase } from '@/domain/usecases'
import { NotFoundError } from '@/application/errors'

export class ListLaunchesController extends Controller {
  constructor (
    private readonly listLaunchesService: ListLaunchesUseCase,
    private readonly listLaunchesDTO: ListLauchesDTO
  ) {
    super()
  }

  override async perform (request: ListLaunchesController.Request): Promise<HttpResponse> {
    const isRequestValid = await this.listLaunchesDTO.validate(request)
    if (isRequestValid instanceof Error) return badRequest(isRequestValid)

    const isMessageLoaded = await this.listLaunchesService.perform(isRequestValid)
    if (isMessageLoaded instanceof NotFoundError) return notFound(isMessageLoaded)

    return isMessageLoaded instanceof Error ? badRequest(isMessageLoaded) : success(isMessageLoaded)
  }
}

export namespace ListLaunchesController {
  export type Request = {
    limit?: number
    offset?: number
    search?: string
  }
}
