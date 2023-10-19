import { NotFoundError } from '@/application/errors'
import { type LoadWelcomeMessageRepository } from '@/application/contracts/database'
import { type ShowWelcomeMessageUseCase } from '@/domain/usecases'

export class ShowWelcomeMessageService implements ShowWelcomeMessageUseCase {
  constructor (private readonly welcomeRepository: LoadWelcomeMessageRepository) {}

  async perform (): Promise<ShowWelcomeMessageUseCase.Result> {
    const loadedMessageFromDb = await this.welcomeRepository.loadWelcomeMessage()

    if (loadedMessageFromDb === undefined) {
      return new NotFoundError('message')
    }

    return {
      message: loadedMessageFromDb
    }
  }
}
