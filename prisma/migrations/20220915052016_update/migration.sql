-- AlterTable
ALTER TABLE "metawhitelist" ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "nft_amount" DROP NOT NULL,
ALTER COLUMN "nationality" DROP NOT NULL,
ALTER COLUMN "discord_username" DROP NOT NULL,
ALTER COLUMN "twitter_username" DROP NOT NULL;
