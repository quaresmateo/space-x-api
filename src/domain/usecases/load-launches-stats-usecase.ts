export interface LoadLaunchesStatsUseCase {
  perform: () => Promise<LoadLaunchesStatsUseCase.Result>
}

export namespace LoadLaunchesStatsUseCase {
  export type Result = {
    rocketLaunches: RocketLaunches
    launchesByYear: LaunchesByYear[]
  }
  | Error

  export type RocketLaunches = {
    success: number
    failed: number
    launches: Launches[]
  }

  export type Launches = {
    rocket: string
    quantity: number
  }

  export type LaunchesByYear = {
    year: number
    quantity: number
  }
}
