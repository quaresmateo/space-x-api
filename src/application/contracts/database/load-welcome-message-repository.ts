export interface LoadWelcomeMessageRepository {
  loadWelcomeMessage: () => Promise<LoadWelcomeMessageRepository.Result>
}

export namespace LoadWelcomeMessageRepository {
  export type Result = string | undefined
}
