-- DropForeignKey
ALTER TABLE "professionals" DROP CONSTRAINT "professionals_specialtyId_fkey";

-- AlterTable
ALTER TABLE "professionals" ALTER COLUMN "specialtyId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "professionals" ADD CONSTRAINT "professionals_specialtyId_fkey" FOREIGN KEY ("specialtyId") REFERENCES "specialties"("id") ON DELETE SET NULL ON UPDATE CASCADE;
