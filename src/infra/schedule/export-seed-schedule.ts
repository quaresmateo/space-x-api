import { seed } from '@/infra/prisma/seed'
import { PrismaClient } from '@prisma/client'
import cron from 'node-cron'

const prisma = new PrismaClient()

export const exportSeedSchedule = cron.schedule(
  // every day at 9:00 AM
  '0 9 * * *',
  () => {
    seed()
      .catch((error) => {
        throw error
      })
      .finally(() => {
        prisma.$disconnect().then(() => {
          console.log('🌱 Seed finished.')
        })
      })
  },
  {
    scheduled: false
  }
)
