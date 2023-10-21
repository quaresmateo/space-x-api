export class NotFoundError extends Error {
  constructor (name: string) {
    const message = `${name} not found!!`
    super(message)
    this.name = message
  }
}
