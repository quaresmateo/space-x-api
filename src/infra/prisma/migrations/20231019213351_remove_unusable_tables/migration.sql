/*
  Warnings:

  - The primary key for the `Launch` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `launchpadId` on the `Launch` table. All the data in the column will be lost.
  - The `failures` column on the `Launch` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `LaunchCore` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `launchpadId` on the `LaunchCore` table. All the data in the column will be lost.
  - You are about to drop the `Astronaut` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Capsule` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Launchpad` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LaunchpadLocation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Payload` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Ship` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `date_unix` to the `Launch` table without a default value. This is not possible if the table is not empty.
  - Added the required column `launchpad` to the `Launch` table without a default value. This is not possible if the table is not empty.
  - Added the required column `landpad` to the `LaunchCore` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Astronaut" DROP CONSTRAINT "Astronaut_launchId_fkey";

-- DropForeignKey
ALTER TABLE "Capsule" DROP CONSTRAINT "Capsule_launchId_fkey";

-- DropForeignKey
ALTER TABLE "Launch" DROP CONSTRAINT "Launch_launchpadId_fkey";

-- DropForeignKey
ALTER TABLE "LaunchCore" DROP CONSTRAINT "LaunchCore_launchId_fkey";

-- DropForeignKey
ALTER TABLE "LaunchCore" DROP CONSTRAINT "LaunchCore_launchpadId_fkey";

-- DropForeignKey
ALTER TABLE "Launchpad" DROP CONSTRAINT "Launchpad_launchpadLocationId_fkey";

-- DropForeignKey
ALTER TABLE "Payload" DROP CONSTRAINT "Payload_launchId_fkey";

-- DropForeignKey
ALTER TABLE "Ship" DROP CONSTRAINT "Ship_launchId_fkey";

-- AlterTable
ALTER TABLE "Launch" DROP CONSTRAINT "Launch_pkey",
DROP COLUMN "launchpadId",
ADD COLUMN     "capsules" TEXT[],
ADD COLUMN     "crew" TEXT[],
ADD COLUMN     "date_unix" INTEGER NOT NULL,
ADD COLUMN     "launchpad" TEXT NOT NULL,
ADD COLUMN     "payloads" TEXT[],
ADD COLUMN     "ships" TEXT[],
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
DROP COLUMN "failures",
ADD COLUMN     "failures" TEXT[],
ADD CONSTRAINT "Launch_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Launch_id_seq";

-- AlterTable
ALTER TABLE "LaunchCore" DROP CONSTRAINT "LaunchCore_pkey",
DROP COLUMN "launchpadId",
ADD COLUMN     "landpad" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "launchId" SET DATA TYPE TEXT,
ADD CONSTRAINT "LaunchCore_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "LaunchCore_id_seq";

-- DropTable
DROP TABLE "Astronaut";

-- DropTable
DROP TABLE "Capsule";

-- DropTable
DROP TABLE "Launchpad";

-- DropTable
DROP TABLE "LaunchpadLocation";

-- DropTable
DROP TABLE "Payload";

-- DropTable
DROP TABLE "Ship";

-- AddForeignKey
ALTER TABLE "LaunchCore" ADD CONSTRAINT "LaunchCore_launchId_fkey" FOREIGN KEY ("launchId") REFERENCES "Launch"("id") ON DELETE SET NULL ON UPDATE CASCADE;
