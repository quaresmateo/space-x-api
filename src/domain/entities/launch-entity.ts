export type LaunchEntity = {
  fairings: string
  links: {
    patch: LinkPatch
    reddit: LinkReddit
    flickr: LinkFlickr
    presskit: string
    webcast: string
    youtube_id: string
    article: string
    wikipedia: string
  }
  static_fire_date_utc: string
  static_fire_date_unix: number
  tdb: boolean
  net: boolean
  window: number
  rocket: string
  success: boolean
  failures: any[]
  details: string
  crew: string[]
  ships: string[]
  capsules: string[]
  payloads: string[]
  launchpad: string
  auto_update: boolean
  flight_number: number
  name: string
  date_utc: string
  date_unix: number
  date_local: string
  date_precision: string
  upcoming: boolean
  cores: Core[]
  id: string
}

type LinkPatch = {
  small: string
  large: string
}

type LinkReddit = {
  campaign: string
  launch: string
  media: string
  recovery: string
}

type LinkFlickr = {
  small: string[]
  original: string[]
}

type Core = {
  core: string
  flight: number
  gridfins: boolean
  legs: boolean
  reused: boolean
  landing_attempt: boolean
  landing_success: boolean
  landing_type: string
  landpad: string
}
