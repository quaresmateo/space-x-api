import { type LaunchEntity } from '@/domain/entities'

export interface ListLaunchesUseCase {
  perform: (params: ListLaunchesUseCase.Params) => Promise<ListLaunchesUseCase.Result>
}

export namespace ListLaunchesUseCase {
  export type Params = {
    limit?: number
    offset?: number
    search?: string
  }

  export type Result = ListLaunchesUseCase.Launches | Error

  export type Launches = {
    launches: LaunchEntity[]
    totalDocs: number
    page: number
    totalPages: number
    hasNext: boolean
    hasPrev: boolean
  }
}
