import { calculatesAllRocketLaunchesPerYearTask, calculatesAllRocketLaunchesTask } from '@/application/services/tasks'
import { type ListLaunchesRepository } from '@/application/contracts/database'
import { NotFoundError } from '@/application/errors'
import { type LoadLaunchesStatsUseCase } from '@/domain/usecases'

export class LoadLaunchesStatsService implements LoadLaunchesStatsUseCase {
  constructor (private readonly launchRepository: ListLaunchesRepository) {}

  async perform (): Promise<LoadLaunchesStatsUseCase.Result> {
    const someLaunchesListed = await this.launchRepository.listLaunches({})
    if (someLaunchesListed === undefined) return new NotFoundError('launches')

    const allLaunchesListed = await this.launchRepository.listLaunches({
      limit: someLaunchesListed?.totalDocs,
      offset: 0
    })
    if (allLaunchesListed === undefined) return new NotFoundError('launches')

    const rocketLaunches = calculatesAllRocketLaunchesTask(allLaunchesListed)
    const launchesByYear = calculatesAllRocketLaunchesPerYearTask(allLaunchesListed)

    return {
      rocketLaunches,
      launchesByYear
    }
  }
}
