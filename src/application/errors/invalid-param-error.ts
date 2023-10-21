export class InvalidParamError extends Error {
  constructor (name: string) {
    const message = `Invalid param: ${name}`
    super(message)
    this.name = message
  }
}
