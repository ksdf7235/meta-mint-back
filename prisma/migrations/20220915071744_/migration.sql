/*
  Warnings:

  - A unique constraint covering the columns `[sol_address]` on the table `metawhitelist` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "metawhitelist_sol_address_key" ON "metawhitelist"("sol_address");
