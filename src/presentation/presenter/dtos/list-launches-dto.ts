import { AbstractDTO } from '@/presentation/presenter/dtos/abstract-dto'
import { type ListLaunchesController } from '@/presentation/controllers'
import { InvalidParamError } from '@/application/errors'
import { validate, IsString, IsInt, IsOptional } from 'class-validator'

export class ListLauchesDTO extends AbstractDTO<ListLaunchesController.Request> {
  @IsInt()
  @IsOptional()
    limit?: number

  @IsInt()
  @IsOptional()
    offset?: number

  @IsString()
  @IsOptional()
    search?: string

  override async validate (request: ListLaunchesController.Request): Promise<ListLaunchesController.Request | Error> {
    const instance = new ListLauchesDTO()
    instance.limit = request?.limit && Number(request?.limit)
    instance.offset = request?.offset && Number(request?.offset)
    instance.search = request?.search

    const errors = await validate(instance)
    if (errors.length) {
      return new InvalidParamError(errors as any)
    }

    return {
      limit: instance.limit,
      offset: instance.offset,
      search: instance.search
    }
  }
}
