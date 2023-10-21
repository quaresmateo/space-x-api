import { type ListLaunchesUseCase, type LoadLaunchesStatsUseCase } from '@/domain/usecases'

export const calculatesAllRocketLaunchesPerYearTask = (
  allLaunchesListed: ListLaunchesUseCase.Launches
): LoadLaunchesStatsUseCase.LaunchesByYear[] => {
  const launchesByYear: LoadLaunchesStatsUseCase.LaunchesByYear[] = allLaunchesListed.launches.reduce(
    (acc: LoadLaunchesStatsUseCase.LaunchesByYear[], launch) => {
      const year = new Date(launch.date_utc).getFullYear()
      const yearIndex = acc.findIndex((paramLaunch) => paramLaunch.year === year)
      if (yearIndex === -1) {
        acc.push({
          year,
          launches: [
            {
              rocket: launch.rocket,
              quantity: 1
            }
          ]
        })
      } else {
        const rocketIndex = acc[yearIndex].launches.findIndex((paramLaunch) => paramLaunch.rocket === launch.rocket)
        if (rocketIndex === -1) {
          acc[yearIndex].launches.push({
            rocket: launch.rocket,
            quantity: 1
          })
        } else {
          acc[yearIndex].launches[rocketIndex].quantity++
        }
      }
      return acc
    },
    []
  )

  return launchesByYear
}
