import { PrismaClient } from '@prisma/client'

export class PrismaClientFactory {
  private static instance: PrismaClientFactory

  public static getInstance (): PrismaClientFactory {
    if (!this.instance) {
      this.instance = new PrismaClientFactory()
    }

    return this.instance
  }

  public make (): PrismaClient {
    return new PrismaClient()
  }
}
