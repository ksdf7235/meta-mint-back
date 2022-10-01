-- CreateTable
CREATE TABLE "metawhitelist" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "sol_address" TEXT NOT NULL,
    "nft_amount" INTEGER NOT NULL,
    "nationality" TEXT NOT NULL,
    "discord_username" TEXT NOT NULL,
    "twitter_username" TEXT NOT NULL,
    "enteredDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "metawhitelist_pkey" PRIMARY KEY ("id")
);
