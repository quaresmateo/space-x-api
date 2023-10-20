import { type LaunchEntity } from '@/domain/entities'

export const listLaunchesTransformer = (launches: any[]): LaunchEntity[] => {
  return launches.map(launch => ({
    fairings: launch.fairings,
    links: {
      patch: launch.links.patch,
      reddit: launch.links.reddit,
      flickr: launch.links.flickr,
      presskit: launch.links.presskit,
      webcast: launch.links.webcast,
      youtube_id: launch.links.youtube_id,
      article: launch.links.article,
      wikipedia: launch.links.wikipedia
    },
    static_fire_date_utc: launch.static_fire_date_utc,
    static_fire_date_unix: launch.static_fire_date_unix,
    tdb: launch.tdb,
    net: launch.net,
    window: launch.window,
    rocket: launch.rocket,
    success: launch.success,
    failures: launch.failures,
    details: launch.details,
    crew: launch.crew,
    ships: launch.ships,
    capsules: launch.capsules,
    payloads: launch.payloads,
    launchpad: launch.launchpad,
    auto_update: launch.auto_update,
    flight_number: launch.flight_number,
    name: launch.name,
    date_utc: launch.date_utc,
    date_unix: launch.date_unix,
    date_local: launch.date_local,
    date_precision: launch.date_precision,
    upcoming: launch.upcoming,
    cores: launch.cores,
    id: launch.id
  }))
}
