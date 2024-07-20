/*
  Warnings:

  - You are about to drop the column `courseInterest` on the `referral` table. All the data in the column will be lost.
  - You are about to drop the column `referralSource` on the `referral` table. All the data in the column will be lost.
  - Added the required column `courseInterested` to the `Referral` table without a default value. This is not possible if the table is not empty.
  - Added the required column `howDidYouHear` to the `Referral` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `referral` DROP COLUMN `courseInterest`,
    DROP COLUMN `referralSource`,
    ADD COLUMN `courseInterested` VARCHAR(191) NOT NULL,
    ADD COLUMN `howDidYouHear` VARCHAR(191) NOT NULL,
    MODIFY `referralCode` VARCHAR(191) NOT NULL;
