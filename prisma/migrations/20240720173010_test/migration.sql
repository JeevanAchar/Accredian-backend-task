/*
  Warnings:

  - Added the required column `message` to the `Referral` table without a default value. This is not possible if the table is not empty.
  - Added the required column `referralCode` to the `Referral` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `referral` ADD COLUMN `message` VARCHAR(191) NOT NULL,
    ADD COLUMN `referralCode` INTEGER NOT NULL;
