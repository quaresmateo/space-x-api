-- CreateTable
CREATE TABLE "Launch" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "date_utc" TIMESTAMP(3) NOT NULL,
    "date_local" TIMESTAMP(3) NOT NULL,
    "date_precision" TEXT NOT NULL,
    "upcoming" BOOLEAN NOT NULL,
    "fairings" TEXT NOT NULL,
    "links" TEXT NOT NULL,
    "static_fire_date_utc" TIMESTAMP(3) NOT NULL,
    "static_fire_date_unix" INTEGER NOT NULL,
    "tdb" BOOLEAN NOT NULL,
    "net" BOOLEAN NOT NULL,
    "window" INTEGER NOT NULL,
    "rocket" TEXT NOT NULL,
    "success" BOOLEAN NOT NULL,
    "failures" TEXT NOT NULL,
    "details" TEXT NOT NULL,
    "auto_update" BOOLEAN NOT NULL,
    "flight_number" INTEGER NOT NULL,
    "launchpadId" INTEGER NOT NULL,

    CONSTRAINT "Launch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LaunchCore" (
    "id" SERIAL NOT NULL,
    "core" TEXT NOT NULL,
    "flight" INTEGER NOT NULL,
    "gridfins" BOOLEAN NOT NULL,
    "legs" BOOLEAN NOT NULL,
    "reused" BOOLEAN NOT NULL,
    "landing_attempt" BOOLEAN NOT NULL,
    "landing_success" BOOLEAN NOT NULL,
    "landing_type" TEXT NOT NULL,
    "launchId" INTEGER,
    "launchpadId" INTEGER NOT NULL,

    CONSTRAINT "LaunchCore_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Astronaut" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "launchId" INTEGER,

    CONSTRAINT "Astronaut_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ship" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,
    "url" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "imo" INTEGER NOT NULL,
    "mmsi" INTEGER NOT NULL,
    "abs" INTEGER NOT NULL,
    "class" INTEGER NOT NULL,
    "weight_lbs" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "home_port" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "launchId" INTEGER,

    CONSTRAINT "Ship_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Capsule" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,
    "url" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "missions" TEXT[],
    "launchId" INTEGER,

    CONSTRAINT "Capsule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payload" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "norad_id" INTEGER NOT NULL,
    "reused" BOOLEAN NOT NULL,
    "customers" TEXT[],
    "nationalities" TEXT[],
    "manufacturers" TEXT[],
    "mass_kg" DOUBLE PRECISION NOT NULL,
    "orbit" TEXT NOT NULL,
    "reference_system" TEXT NOT NULL,
    "launchId" INTEGER,

    CONSTRAINT "Payload_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Launchpad" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "details" TEXT NOT NULL,
    "vehicles_launched" TEXT[],
    "launchpadLocationId" INTEGER NOT NULL,

    CONSTRAINT "Launchpad_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LaunchpadLocation" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "LaunchpadLocation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Launch" ADD CONSTRAINT "Launch_launchpadId_fkey" FOREIGN KEY ("launchpadId") REFERENCES "Launchpad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LaunchCore" ADD CONSTRAINT "LaunchCore_launchpadId_fkey" FOREIGN KEY ("launchpadId") REFERENCES "Launchpad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LaunchCore" ADD CONSTRAINT "LaunchCore_launchId_fkey" FOREIGN KEY ("launchId") REFERENCES "Launch"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Astronaut" ADD CONSTRAINT "Astronaut_launchId_fkey" FOREIGN KEY ("launchId") REFERENCES "Launch"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ship" ADD CONSTRAINT "Ship_launchId_fkey" FOREIGN KEY ("launchId") REFERENCES "Launch"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Capsule" ADD CONSTRAINT "Capsule_launchId_fkey" FOREIGN KEY ("launchId") REFERENCES "Launch"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payload" ADD CONSTRAINT "Payload_launchId_fkey" FOREIGN KEY ("launchId") REFERENCES "Launch"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Launchpad" ADD CONSTRAINT "Launchpad_launchpadLocationId_fkey" FOREIGN KEY ("launchpadLocationId") REFERENCES "LaunchpadLocation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
