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

-- CreateIndex
CREATE UNIQUE INDEX "metawhitelist_sol_address_key" ON "metawhitelist"("sol_address");

-- CreateIndex
CREATE UNIQUE INDEX "bulkfail_sol_address_key" ON "bulkfail"("sol_address");

-- CreateIndex
CREATE UNIQUE INDEX "testbulk_sol_address_key" ON "testbulk"("sol_address");
