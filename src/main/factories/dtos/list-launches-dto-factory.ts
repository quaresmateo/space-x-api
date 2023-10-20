import { ListLauchesDTO } from '@/presentation/presenter/dtos'

export class ListLauchesDTOFactory {
  private static instance: ListLauchesDTOFactory

  public static getInstance (): ListLauchesDTOFactory {
    if (!this.instance) {
      this.instance = new ListLauchesDTOFactory()
    }

    return this.instance
  }

  public make (): ListLauchesDTO {
    return new ListLauchesDTO()
  }
}
