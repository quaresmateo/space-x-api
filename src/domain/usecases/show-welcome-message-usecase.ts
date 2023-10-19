export interface ShowWelcomeMessageUseCase {
  perform: () => Promise<ShowWelcomeMessageUseCase.Result>
}

export namespace ShowWelcomeMessageUseCase {
  export type Result = {
    message: string
  } | Error
}
