import { PrismaClientFactory } from '@/main/factories/repositories'
import { LaunchRepository } from '@/infra/database'

export class LaunchRepositoryFactory {
  private static instance: LaunchRepositoryFactory

  public static getInstance (): LaunchRepositoryFactory {
    if (!this.instance) {
      this.instance = new LaunchRepositoryFactory()
    }

    return this.instance
  }

  public make (): LaunchRepository {
    return new LaunchRepository(PrismaClientFactory.getInstance().make())
  }
}
