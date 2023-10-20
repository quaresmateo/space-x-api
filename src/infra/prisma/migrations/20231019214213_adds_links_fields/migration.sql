/*
  Warnings:

  - You are about to drop the column `links` on the `Launch` table. All the data in the column will be lost.
  - Added the required column `linksId` to the `Launch` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Launch" DROP COLUMN "links",
ADD COLUMN     "linksId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Links" (
    "id" TEXT NOT NULL,
    "presskit" TEXT NOT NULL,
    "webcast" TEXT NOT NULL,
    "youtube_id" TEXT NOT NULL,
    "article" TEXT NOT NULL,
    "wikipedia" TEXT NOT NULL,
    "patchId" TEXT NOT NULL,
    "redditId" TEXT NOT NULL,
    "flickrId" TEXT NOT NULL,

    CONSTRAINT "Links_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Patch" (
    "id" TEXT NOT NULL,
    "small" TEXT NOT NULL,
    "large" TEXT NOT NULL,

    CONSTRAINT "Patch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reddit" (
    "id" TEXT NOT NULL,
    "campaign" TEXT NOT NULL,
    "launch" TEXT NOT NULL,
    "media" TEXT NOT NULL,
    "recovery" TEXT NOT NULL,

    CONSTRAINT "Reddit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Flickr" (
    "id" TEXT NOT NULL,
    "small" TEXT NOT NULL,
    "original" TEXT NOT NULL,

    CONSTRAINT "Flickr_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Launch" ADD CONSTRAINT "Launch_linksId_fkey" FOREIGN KEY ("linksId") REFERENCES "Links"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Links" ADD CONSTRAINT "Links_patchId_fkey" FOREIGN KEY ("patchId") REFERENCES "Patch"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Links" ADD CONSTRAINT "Links_redditId_fkey" FOREIGN KEY ("redditId") REFERENCES "Reddit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Links" ADD CONSTRAINT "Links_flickrId_fkey" FOREIGN KEY ("flickrId") REFERENCES "Flickr"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
