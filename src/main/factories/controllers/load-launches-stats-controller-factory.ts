import { LoadLaunchesStatsServiceFactory } from '@/main/factories/services'
import { LoadLaunchesStatsController } from '@/presentation/controllers'

export class LoadLaunchesStatsControllerFactory {
  private static instance: LoadLaunchesStatsControllerFactory

  public static getInstance (): LoadLaunchesStatsControllerFactory {
    if (!this.instance) {
      this.instance = new LoadLaunchesStatsControllerFactory()
    }

    return this.instance
  }

  public make (): LoadLaunchesStatsController {
    return new LoadLaunchesStatsController(
      LoadLaunchesStatsServiceFactory.getInstance().make()
    )
  }
}
