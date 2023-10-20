import { type ListLaunchesRepository } from '@/application/contracts/database'
import { NotFoundError } from '@/application/errors'
import { type ListLaunchesUseCase } from '@/domain/usecases'

export class ListLaunchesService implements ListLaunchesUseCase {
  constructor (private readonly launchRepository: ListLaunchesRepository) {}

  async perform (params: ListLaunchesUseCase.Params): Promise<ListLaunchesUseCase.Result> {
    const listedLaunches = await this.launchRepository.listLaunches(params)

    if (listedLaunches === undefined) return new NotFoundError('launches')

    return listedLaunches
  }
}
