/*
  Warnings:

  - A unique constraint covering the columns `[participantNameKr]` on the table `Sungju` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Sungju_participantNameKr_key" ON "Sungju"("participantNameKr");
