import { WelcomeRepository } from '@/infra/database'

export class WelcomeRepositoryFactory {
  private static instance: WelcomeRepositoryFactory

  public static getInstance (): WelcomeRepositoryFactory {
    if (!this.instance) {
      this.instance = new WelcomeRepositoryFactory()
    }

    return this.instance
  }

  public make (): WelcomeRepository {
    return new WelcomeRepository()
  }
}
