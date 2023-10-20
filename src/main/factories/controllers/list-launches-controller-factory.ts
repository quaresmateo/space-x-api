import { ListLauchesDTOFactory } from '@/main/factories/dtos'
import { ListLaunchesServiceFactory } from '@/main/factories/services'
import { ListLaunchesController } from '@/presentation/controllers'

export class ListLaunchesControllerFactory {
  private static instance: ListLaunchesControllerFactory

  public static getInstance (): ListLaunchesControllerFactory {
    if (!this.instance) {
      this.instance = new ListLaunchesControllerFactory()
    }

    return this.instance
  }

  public make (): ListLaunchesController {
    return new ListLaunchesController(
      ListLaunchesServiceFactory.getInstance().make(),
      ListLauchesDTOFactory.getInstance().make()
    )
  }
}
