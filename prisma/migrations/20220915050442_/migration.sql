/*
  Warnings:

  - Made the column `email` on table `metawhitelist` required. This step will fail if there are existing NULL values in that column.
  - Made the column `nationality` on table `metawhitelist` required. This step will fail if there are existing NULL values in that column.
  - Made the column `discord_username` on table `metawhitelist` required. This step will fail if there are existing NULL values in that column.
  - Made the column `twitter_username` on table `metawhitelist` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "metawhitelist" ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "nationality" SET NOT NULL,
ALTER COLUMN "discord_username" SET NOT NULL,
ALTER COLUMN "twitter_username" SET NOT NULL;
