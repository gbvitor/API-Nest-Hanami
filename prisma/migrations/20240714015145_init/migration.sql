/*
  Warnings:

  - You are about to drop the column `authorId` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `content` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `publishDate` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `posts` table. All the data in the column will be lost.
  - Added the required column `autorId` to the `Posts` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `posts` DROP FOREIGN KEY `Posts_authorId_fkey`;

-- AlterTable
ALTER TABLE `posts` DROP COLUMN `authorId`,
    DROP COLUMN `content`,
    DROP COLUMN `publishDate`,
    DROP COLUMN `title`,
    ADD COLUMN `autorId` INTEGER NOT NULL,
    ADD COLUMN `conteudo` LONGBLOB NULL,
    ADD COLUMN `dataPublicacao` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `titulo` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Posts` ADD CONSTRAINT `Posts_autorId_fkey` FOREIGN KEY (`autorId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
