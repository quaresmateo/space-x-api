import { LaunchRepositoryFactory } from '@/main/factories/repositories'
import { ListLaunchesService } from '@/application/services'

export class ListLaunchesServiceFactory {
  private static instance: ListLaunchesServiceFactory

  public static getInstance (): ListLaunchesServiceFactory {
    if (!this.instance) {
      this.instance = new ListLaunchesServiceFactory()
    }

    return this.instance
  }

  public make (): ListLaunchesService {
    return new ListLaunchesService(
      LaunchRepositoryFactory.getInstance().make()
    )
  }
}
