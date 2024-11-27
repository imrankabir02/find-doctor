-- CreateTable
CREATE TABLE "Facility" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "orgPracId" TEXT NOT NULL,
    "username" TEXT,
    "name" TEXT NOT NULL,
    "ranking" INTEGER NOT NULL,
    "photo" TEXT,
    "category" TEXT NOT NULL,
    "subCategory" TEXT[],
    "rating" DOUBLE PRECISION NOT NULL,
    "totalAppointments" INTEGER NOT NULL,
    "zone" TEXT[],
    "branch" TEXT[],
    "areaOfPractice" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Facility_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Facility_orgPracId_key" ON "Facility"("orgPracId");

-- CreateIndex
CREATE INDEX "Facility_name_idx" ON "Facility"("name");

-- CreateIndex
CREATE INDEX "Facility_category_idx" ON "Facility"("category");
