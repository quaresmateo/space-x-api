import { WelcomeRepositoryFactory } from '@/main/factories/repositories'
import { ShowWelcomeMessageService } from '@/application/services'

export class ShowWelcomeMessageServiceFactory {
  private static instance: ShowWelcomeMessageServiceFactory

  public static getInstance (): ShowWelcomeMessageServiceFactory {
    if (!this.instance) {
      this.instance = new ShowWelcomeMessageServiceFactory()
    }

    return this.instance
  }

  public make (): ShowWelcomeMessageService {
    return new ShowWelcomeMessageService(
      WelcomeRepositoryFactory.getInstance().make()
    )
  }
}
