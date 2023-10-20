import { type ListLaunchesUseCase } from '@/domain/usecases'

export interface ListLaunchesRepository {
  listLaunches: (params: ListLaunchesRepository.Params) => Promise<ListLaunchesRepository.Result>
}

export namespace ListLaunchesRepository {
  export type Params = ListLaunchesUseCase.Params
  export type Result = ListLaunchesUseCase.Launches | undefined
}
