import { ShowWelcomeMessageServiceFactory } from '@/main/factories/services'
import { ShowWelcomeMessageController } from '@/presentation/controllers'

export class ShowWelcomeMessageControllerFactory {
  private static instance: ShowWelcomeMessageControllerFactory

  public static getInstance (): ShowWelcomeMessageControllerFactory {
    if (!this.instance) {
      this.instance = new ShowWelcomeMessageControllerFactory()
    }

    return this.instance
  }

  public make (): ShowWelcomeMessageController {
    return new ShowWelcomeMessageController(
      ShowWelcomeMessageServiceFactory.getInstance().make()
    )
  }
}
