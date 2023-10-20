import { AbstractDTO } from '@/presentation/presenter/dtos/abstract-dto'
import { InvalidParamError } from '@/application/errors'
import { validate, IsString, IsInt, IsOptional } from 'class-validator'

export class ListLauchesDTO extends AbstractDTO<ListLauchesDTO> {
  @IsInt()
  @IsOptional()
    limit?: number

  @IsInt()
  @IsOptional()
    offset?: number

  @IsString()
  @IsOptional()
    search?: string

  override async validate (params: any): Promise<ListLauchesDTO | Error> {
    const errors = await validate(this.create(params))
    if (errors.length) {
      return new InvalidParamError(errors as any)
    }

    return this
  }

  private create (params: any): ListLauchesDTO {
    return Object.assign(new ListLauchesDTO(), params)
  }
}
