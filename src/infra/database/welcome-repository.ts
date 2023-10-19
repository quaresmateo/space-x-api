import { type LoadWelcomeMessageRepository } from '@/application/contracts/database'

export class WelcomeRepository implements LoadWelcomeMessageRepository {
  async loadWelcomeMessage (): Promise<LoadWelcomeMessageRepository.Result> {
    return 'Fullstack Challenge 🏅 - Space X API'
  }
}
