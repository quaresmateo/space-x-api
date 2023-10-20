/*
  Warnings:

  - The `small` column on the `Flickr` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `original` column on the `Flickr` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Flickr" DROP COLUMN "small",
ADD COLUMN     "small" TEXT[],
DROP COLUMN "original",
ADD COLUMN     "original" TEXT[];
