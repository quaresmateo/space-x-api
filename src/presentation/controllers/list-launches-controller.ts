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

    const isLaunchesListed = await this.listLaunchesService.perform(isRequestValid)
    if (isLaunchesListed instanceof NotFoundError) return notFound(isLaunchesListed)

    return isLaunchesListed instanceof Error ? badRequest(isLaunchesListed) : success(isLaunchesListed)
  }
}

export namespace ListLaunchesController {
  export type Request = {
    limit?: number
    offset?: number
    search?: string
  }
}
