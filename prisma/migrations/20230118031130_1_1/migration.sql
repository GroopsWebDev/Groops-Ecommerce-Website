/*
  Warnings:

  - You are about to drop the `registeduser` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `address` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `address` VARCHAR(191) NOT NULL,
    ADD COLUMN `birthday` DATETIME(3) NULL,
    ADD COLUMN `password` VARCHAR(191) NOT NULL,
    ADD COLUMN `phone` INTEGER NULL,
    ADD COLUMN `role` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `registeduser`;

-- CreateTable
CREATE TABLE `Product` (
    `skuid` VARCHAR(191) NOT NULL,
    `englishProductName` VARCHAR(191) NOT NULL,
    `chineseProductNName` VARCHAR(191) NULL,
    `frenchProductNName` VARCHAR(191) NULL,
    `placeOfOrigin` VARCHAR(191) NULL,
    `productWeight` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `alcohol` BOOLEAN NOT NULL DEFAULT false,
    `price` INTEGER NOT NULL DEFAULT 0,
    `image` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `retailPrice` INTEGER NOT NULL DEFAULT 0,
    `costPrice` INTEGER NOT NULL DEFAULT 0,
    `stock` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`skuid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Order` (
    `orderId` VARCHAR(191) NOT NULL,
    `orderDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `userId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Order_userId_key`(`userId`),
    PRIMARY KEY (`orderId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PurchasedItem` (
    `productId` VARCHAR(191) NOT NULL,
    `orderId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `PurchasedItem_productId_key`(`productId`),
    UNIQUE INDEX `PurchasedItem_orderId_key`(`orderId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cart` (
    `userId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Cart_userId_key`(`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CartItem` (
    `cartItemId` VARCHAR(191) NOT NULL,
    `cartOwnerId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `CartItem_cartItemId_key`(`cartItemId`),
    UNIQUE INDEX `CartItem_cartOwnerId_key`(`cartOwnerId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Group` (
    `groupId` VARCHAR(191) NOT NULL,
    `groupMasterId` VARCHAR(191) NOT NULL,
    `groupName` VARCHAR(191) NOT NULL,
    `startDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `endDate` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Group_groupMasterId_key`(`groupMasterId`),
    PRIMARY KEY (`groupId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `GroupMember` (
    `groupMemberId` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `groupId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `GroupMember_userId_key`(`userId`),
    PRIMARY KEY (`groupMemberId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PurchasedItem` ADD CONSTRAINT `PurchasedItem_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`skuid`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PurchasedItem` ADD CONSTRAINT `PurchasedItem_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Order`(`orderId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cart` ADD CONSTRAINT `Cart_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CartItem` ADD CONSTRAINT `CartItem_cartItemId_fkey` FOREIGN KEY (`cartItemId`) REFERENCES `Product`(`skuid`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CartItem` ADD CONSTRAINT `CartItem_cartOwnerId_fkey` FOREIGN KEY (`cartOwnerId`) REFERENCES `Cart`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Group` ADD CONSTRAINT `Group_groupMasterId_fkey` FOREIGN KEY (`groupMasterId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GroupMember` ADD CONSTRAINT `GroupMember_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GroupMember` ADD CONSTRAINT `GroupMember_groupId_fkey` FOREIGN KEY (`groupId`) REFERENCES `Group`(`groupId`) ON DELETE RESTRICT ON UPDATE CASCADE;
