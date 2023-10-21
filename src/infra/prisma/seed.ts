import { faker } from '@faker-js/faker'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const randomBoolean = (): boolean => {
  return Math.random() < 0.5
}

const randomRocket = (): string => {
  const rockets = [
    'Falcon 1',
    'New Falcon 9',
    'Falcon Heavy',
    'Used Falcon 9'
  ]

  const randomIndex = Math.floor(Math.random() * rockets.length)

  return rockets[randomIndex]
}

export async function seed (): Promise<void> {
  for (let i = 0; i < 10; i++) {
    await prisma.launch.create({
      data: {
        name: faker.word.adjective(),
        date_utc: new Date(faker.date.future().getTime()),
        date_local: new Date(faker.date.future().getTime()),
        date_precision: 'hour',
        date_unix: faker.number.int(1000),
        upcoming: randomBoolean(),
        fairings: faker.word.adjective(),
        static_fire_date_utc: new Date(faker.date.past()),
        static_fire_date_unix: faker.number.int(1000),
        tdb: randomBoolean(),
        net: randomBoolean(),
        window: faker.number.float(),
        rocket: randomRocket(),
        success: randomBoolean(),
        failures: Array.from({ length: 10 }, () => faker.string.uuid()),
        details: faker.lorem.paragraph(),
        crew: Array.from({ length: 10 }, () => faker.string.uuid()),
        ships: Array.from({ length: 10 }, () => faker.string.uuid()),
        capsules: Array.from({ length: 10 }, () => faker.string.uuid()),
        payloads: Array.from({ length: 10 }, () => faker.string.uuid()),
        launchpad: faker.string.numeric(30),
        auto_update: randomBoolean(),
        flight_number: faker.number.int(1000),
        links: {
          create: {
            patch: {
              create: {
                small: faker.image.url(),
                large: faker.image.url()
              }
            },
            reddit: {
              create: {
                campaign: faker.internet.url(),
                launch: faker.internet.url(),
                media: faker.internet.url(),
                recovery: faker.internet.url()
              }
            },
            flickr: {
              create: {
                small: Array.from({ length: 10 }, () => faker.image.url()),
                original: Array.from({ length: 10 }, () => faker.image.url())
              }
            },
            presskit: faker.internet.url(),
            webcast: faker.internet.url(),
            youtube_id: faker.string.uuid(),
            article: faker.internet.url(),
            wikipedia: faker.internet.url()
          }
        },
        cores: {
          createMany: {
            data: Array.from({ length: 10 }, () => ({
              core: faker.string.uuid(),
              flight: faker.number.float(),
              gridfins: randomBoolean(),
              legs: randomBoolean(),
              reused: randomBoolean(),
              landing_attempt: randomBoolean(),
              landing_success: randomBoolean(),
              landing_type: faker.word.preposition().toUpperCase(),
              landpad: faker.string.uuid()
            }))
          }
        }
      }
    })
  }
}

seed()
  .catch((error) => {
    throw error
  })
  .finally(() => {
    prisma.$disconnect().then(() => {
      console.log('🌱 Seed finished.')
    })
  })
