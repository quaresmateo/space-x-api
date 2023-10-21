import { faker } from '@faker-js/faker'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const randomBoolean = (): boolean => {
  return Math.random() < 0.5
}

async function seed (): Promise<void> {
  for (let i = 0; i < 10; i++) {
    await prisma.launch.create({
      data: {
        name: faker.word.adjective(),
        date_utc: new Date(faker.date.future().getTime()),
        date_local: new Date(faker.date.future().getTime()),
        date_precision: faker.word.adjective(),
        date_unix: faker.number.float(),
        upcoming: randomBoolean(),
        fairings: faker.word.adjective(),
        static_fire_date_utc: new Date(faker.date.past()),
        static_fire_date_unix: faker.number.float(),
        tdb: randomBoolean(),
        net: randomBoolean(),
        window: faker.number.float(),
        rocket: faker.word.words(),
        success: randomBoolean(),
        failures: faker.word.words().split(' '),
        details: faker.lorem.paragraph(),
        crew: faker.word.words().split(' '),
        ships: faker.word.words().split(' '),
        capsules: faker.word.words().split(' '),
        payloads: faker.word.words().split(' '),
        launchpad: faker.word.adjective(),
        auto_update: randomBoolean(),
        flight_number: faker.number.float(),
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
            youtube_id: faker.number.float().toString(),
            article: faker.internet.url(),
            wikipedia: faker.internet.url()
          }
        },
        cores: {
          createMany: {
            data: Array.from({ length: 10 }, () => ({
              core: faker.word.adjective(),
              flight: faker.number.float(),
              gridfins: randomBoolean(),
              legs: randomBoolean(),
              reused: randomBoolean(),
              landing_attempt: randomBoolean(),
              landing_success: randomBoolean(),
              landing_type: faker.word.adjective(),
              landpad: faker.word.adjective()
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
