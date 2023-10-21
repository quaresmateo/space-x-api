import { badRequest, notFound, success, type HttpResponse } from '@/presentation/helpers'
import { Controller } from '@/presentation/controllers/controller-abstract'
import { type LoadLaunchesStatsUseCase } from '@/domain/usecases'
import { NotFoundError } from '@/application/errors'

export class LoadLaunchesStatsController extends Controller {
  constructor (private readonly listLaunchesService: LoadLaunchesStatsUseCase) {
    super()
  }

  override async perform (): Promise<HttpResponse> {
    const isLauchesStatsLoaded = await this.listLaunchesService.perform()
    if (isLauchesStatsLoaded instanceof NotFoundError) return notFound(isLauchesStatsLoaded)

    return isLauchesStatsLoaded instanceof Error ? badRequest(isLauchesStatsLoaded) : success(isLauchesStatsLoaded)
  }
}
