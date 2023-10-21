import { LaunchRepositoryFactory } from '@/main/factories/repositories'
import { LoadLaunchesStatsService } from '@/application/services'

export class LoadLaunchesStatsServiceFactory {
  private static instance: LoadLaunchesStatsServiceFactory

  public static getInstance (): LoadLaunchesStatsServiceFactory {
    if (!this.instance) {
      this.instance = new LoadLaunchesStatsServiceFactory()
    }

    return this.instance
  }

  public make (): LoadLaunchesStatsService {
    return new LoadLaunchesStatsService(
      LaunchRepositoryFactory.getInstance().make()
    )
  }
}
