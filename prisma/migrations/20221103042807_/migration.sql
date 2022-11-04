-- CreateTable
CREATE TABLE "metawhitelist" (
    "id" SERIAL NOT NULL,
    "email" TEXT,
    "sol_address" TEXT NOT NULL,
    "nft_amount" INTEGER,
    "nationality" TEXT,
    "discord_username" TEXT,
    "twitter_username" TEXT,

    CONSTRAINT "metawhitelist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bulkfail" (
    "id" SERIAL NOT NULL,
    "discord_username" TEXT,
    "sol_address" TEXT NOT NULL,
    "nft_amount" INTEGER,

    CONSTRAINT "bulkfail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "testbulk" (
    "id" SERIAL NOT NULL,
    "discord_username" TEXT,
    "sol_address" TEXT NOT NULL,
    "nft_amount" INTEGER,

    CONSTRAINT "testbulk_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wallet" (
    "id" SERIAL NOT NULL,
    "publicKey" TEXT NOT NULL,

    CONSTRAINT "wallet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "nft" (
    "id" SERIAL NOT NULL,
    "walletId" INTEGER NOT NULL,
    "sol_address" TEXT NOT NULL,
    "nft_amount" INTEGER,

    CONSTRAINT "nft_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "faildata" (
    "id" SERIAL NOT NULL,
    "sol_address" TEXT NOT NULL,
    "nft_amount" INTEGER,

    CONSTRAINT "faildata_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "metawhitelist_sol_address_key" ON "metawhitelist"("sol_address");

-- CreateIndex
CREATE UNIQUE INDEX "bulkfail_sol_address_key" ON "bulkfail"("sol_address");

-- CreateIndex
CREATE UNIQUE INDEX "testbulk_sol_address_key" ON "testbulk"("sol_address");

-- CreateIndex
CREATE UNIQUE INDEX "wallet_publicKey_key" ON "wallet"("publicKey");

-- CreateIndex
CREATE UNIQUE INDEX "nft_sol_address_key" ON "nft"("sol_address");

-- CreateIndex
CREATE UNIQUE INDEX "faildata_sol_address_key" ON "faildata"("sol_address");

-- AddForeignKey
ALTER TABLE "nft" ADD CONSTRAINT "nft_walletId_fkey" FOREIGN KEY ("walletId") REFERENCES "wallet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
