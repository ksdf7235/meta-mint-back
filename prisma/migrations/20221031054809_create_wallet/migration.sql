-- CreateTable
CREATE TABLE "Wallet" (
    "id" SERIAL NOT NULL,
    "publicKey" TEXT NOT NULL,

    CONSTRAINT "Wallet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NFT" (
    "id" SERIAL NOT NULL,
    "walletId" INTEGER NOT NULL,
    "sol_address" TEXT NOT NULL,
    "nft_amount" INTEGER,

    CONSTRAINT "NFT_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Wallet_publicKey_key" ON "Wallet"("publicKey");

-- CreateIndex
CREATE UNIQUE INDEX "NFT_sol_address_key" ON "NFT"("sol_address");

-- AddForeignKey
ALTER TABLE "NFT" ADD CONSTRAINT "NFT_walletId_fkey" FOREIGN KEY ("walletId") REFERENCES "Wallet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
