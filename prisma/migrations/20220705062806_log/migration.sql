-- CreateTable
CREATE TABLE "seongjulog" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "hostNameEng" TEXT NOT NULL,
    "hostNameKr" TEXT NOT NULL,
    "participantNameKr" TEXT NOT NULL,
    "createdDateMil" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "enteredDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "exitedDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "seongjulog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "seongjulog_participantNameKr_key" ON "seongjulog"("participantNameKr");
