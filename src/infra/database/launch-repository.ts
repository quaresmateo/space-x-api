import { type ListLaunchesRepository } from '@/application/contracts/database'
import { listLaunchesTransformer } from '@/infra/database/transformers'
import { type PrismaClient } from '@prisma/client'

export class LaunchRepository implements ListLaunchesRepository {
  constructor (private readonly prisma: PrismaClient) {}
  async listLaunches ({
    limit = 10,
    offset = 0,
    search
  }: ListLaunchesRepository.Params): Promise<ListLaunchesRepository.Result> {
    const launches = await this.prisma.launch.findMany({
      take: limit,
      skip: offset,
      where: {
        name: {
          contains: search
        }
      },
      include: {
        cores: true,
        links: {
          include: {
            patch: true,
            reddit: true,
            flickr: true
          }
        }
      }
    })

    const currentPages = Math.ceil(offset / limit) + 1
    const totalDocs = await this.prisma.launch.count()
    const totalPages = Math.ceil(totalDocs / limit)
    const hasNext = currentPages < totalPages
    const hasPrev = currentPages > 1

    if (!launches) return undefined

    const transformedLaunches = listLaunchesTransformer(launches)

    return {
      launches: transformedLaunches,
      totalDocs,
      page: currentPages,
      totalPages,
      hasNext,
      hasPrev
    }
  }
}
