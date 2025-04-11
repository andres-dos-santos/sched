/*
  Warnings:

  - The `resetPasswordExpiresAt` column on the `professionals` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `verificationTokenExpiresAt` on the `professionals` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "professionals" DROP COLUMN "resetPasswordExpiresAt",
ADD COLUMN     "resetPasswordExpiresAt" TIMESTAMP(3),
DROP COLUMN "verificationTokenExpiresAt",
ADD COLUMN     "verificationTokenExpiresAt" TIMESTAMP(3) NOT NULL;
