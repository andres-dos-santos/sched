-- AlterTable
ALTER TABLE "users" ALTER COLUMN "resetPasswordExpiresAt" SET DATA TYPE BIGINT,
ALTER COLUMN "verificationTokenExpiresAt" SET DATA TYPE BIGINT;
