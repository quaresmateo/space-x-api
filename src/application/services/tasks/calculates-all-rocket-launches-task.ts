import { type ListLaunchesUseCase, type LoadLaunchesStatsUseCase } from '@/domain/usecases'

export const calculatesAllRocketLaunchesTask = (
  allLaunchesListed: ListLaunchesUseCase.Launches
): LoadLaunchesStatsUseCase.RocketLaunches => {
  const successCount = allLaunchesListed.launches.filter((launch) => launch.success).length
  const failedCount = allLaunchesListed.launches.filter((launch) => !launch.success).length
  const launches: LoadLaunchesStatsUseCase.Launches[] = allLaunchesListed.launches.map((launch) => {
    return {
      rocket: launch.rocket,
      quantity: allLaunchesListed.launches.filter((paramLaunch) => paramLaunch.rocket === launch.rocket).length
    }
  })
  const rocketLaunches: LoadLaunchesStatsUseCase.RocketLaunches = {
    success: successCount,
    failed: failedCount,
    launches
  }

  return rocketLaunches
}
