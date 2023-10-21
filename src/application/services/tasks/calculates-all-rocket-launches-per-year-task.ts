import { type ListLaunchesUseCase, type LoadLaunchesStatsUseCase } from '@/domain/usecases'

export const calculatesAllRocketLaunchesPerYearTask = (
  allLaunchesListed: ListLaunchesUseCase.Launches
): LoadLaunchesStatsUseCase.LaunchesByYear[] => {
  const launchesByYear: LoadLaunchesStatsUseCase.LaunchesByYear[] = allLaunchesListed.launches.reduce<
  LoadLaunchesStatsUseCase.LaunchesByYear[]
  >((acc, launch) => {
    const year = new Date(launch.date_utc).getFullYear()
    const yearFound = acc.find((item) => item.year === year)
    if (yearFound) {
      yearFound.quantity++
    } else {
      acc.push({ year, quantity: 1 })
    }
    return acc
  }, [])

  return launchesByYear
}
