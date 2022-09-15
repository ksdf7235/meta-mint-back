/*
  Warnings:

  - You are about to drop the column `genre` on the `Sungju` table. All the data in the column will be lost.
  - You are about to drop the column `year` on the `Sungju` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Sungju" DROP COLUMN "genre",
DROP COLUMN "year";
