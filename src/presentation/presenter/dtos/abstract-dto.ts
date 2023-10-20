export abstract class AbstractDTO<T> {
  abstract validate (params: any): Promise<T | Error>
}
