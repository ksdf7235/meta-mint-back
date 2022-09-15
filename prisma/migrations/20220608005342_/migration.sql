/*
  Warnings:

  - You are about to drop the `Sungju` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Sungju";

-- CreateTable
CREATE TABLE "seongju" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "hostNameEng" TEXT NOT NULL,
    "hostNameKr" TEXT NOT NULL,
    "participantNameKr" TEXT NOT NULL,
    "participantNameEng" TEXT NOT NULL,
    "createdDateMil" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "enteredDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "exitedDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "seongju_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "seongju_participantNameKr_key" ON "seongju"("participantNameKr");
