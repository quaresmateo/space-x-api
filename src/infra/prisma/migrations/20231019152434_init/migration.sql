-- CreateTable
CREATE TABLE "Rocket" (
    "id" TEXT NOT NULL PRIMARY KEY
);

-- CreateTable
CREATE TABLE "Core" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "flight" INTEGER NOT NULL,
    "gridfins" BOOLEAN NOT NULL,
    "legs" BOOLEAN NOT NULL,
    "reused" BOOLEAN NOT NULL,
    "landing_attempt" BOOLEAN NOT NULL,
    "landing_success" BOOLEAN NOT NULL,
    "landing_type" TEXT NOT NULL,
    "landpad" TEXT NOT NULL,
    "rocketId" TEXT NOT NULL,
    "launchId" TEXT,
    CONSTRAINT "Core_rocketId_fkey" FOREIGN KEY ("rocketId") REFERENCES "Rocket" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Core_launchId_fkey" FOREIGN KEY ("launchId") REFERENCES "Launch" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Launchpad" (
    "id" TEXT NOT NULL PRIMARY KEY
);

-- CreateTable
CREATE TABLE "Payload" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "launchId" TEXT,
    CONSTRAINT "Payload_launchId_fkey" FOREIGN KEY ("launchId") REFERENCES "Launch" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Ship" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "launchId" TEXT,
    CONSTRAINT "Ship_launchId_fkey" FOREIGN KEY ("launchId") REFERENCES "Launch" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Capsule" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "launchId" TEXT,
    CONSTRAINT "Capsule_launchId_fkey" FOREIGN KEY ("launchId") REFERENCES "Launch" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Crew" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "launchId" TEXT,
    CONSTRAINT "Crew_launchId_fkey" FOREIGN KEY ("launchId") REFERENCES "Launch" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Launch" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "static_fire_date_utc" DATETIME NOT NULL,
    "static_fire_date_unix" INTEGER NOT NULL,
    "tdb" BOOLEAN NOT NULL,
    "net" BOOLEAN NOT NULL,
    "window" INTEGER NOT NULL,
    "rocketId" TEXT NOT NULL,
    "success" BOOLEAN NOT NULL,
    "details" TEXT NOT NULL,
    "date_utc" DATETIME NOT NULL,
    "date_unix" INTEGER NOT NULL,
    "date_local" DATETIME NOT NULL,
    "date_precision" TEXT NOT NULL,
    "upcoming" BOOLEAN NOT NULL,
    "name" TEXT NOT NULL,
    "article" TEXT NOT NULL,
    "wikipedia" TEXT NOT NULL,
    "presskit" TEXT NOT NULL,
    "webcast" TEXT NOT NULL,
    "youtube_id" TEXT NOT NULL,
    "launchpadId" TEXT NOT NULL,
    CONSTRAINT "Launch_rocketId_fkey" FOREIGN KEY ("rocketId") REFERENCES "Rocket" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Launch_launchpadId_fkey" FOREIGN KEY ("launchpadId") REFERENCES "Launchpad" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
