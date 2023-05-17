-- CreateTable
CREATE TABLE `account` (
    `id` VARCHAR(50) NOT NULL DEFAULT '0',
    `userId` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `provider` VARCHAR(191) NOT NULL,
    `providerAccountId` VARCHAR(191) NOT NULL,
    `refresh_token` TEXT NULL,
    `access_token` TEXT NULL,
    `expires_at` INTEGER NULL,
    `token_type` VARCHAR(191) NULL,
    `scope` VARCHAR(191) NULL,
    `id_token` TEXT NULL,
    `session_state` VARCHAR(191) NULL,

    INDEX `Account_userId_fkey`(`userId`),
    UNIQUE INDEX `Account_provider_providerAccountId_key`(`provider`, `providerAccountId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cart` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `productId` VARCHAR(100) NULL,
    `qty` VARCHAR(100) NULL,
    `userId` VARCHAR(100) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NULL,
    `url` VARCHAR(255) NULL,
    `createdAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `group` (
    `groupId` VARCHAR(191) NOT NULL,
    `groupMasterId` VARCHAR(191) NOT NULL,
    `groupName` VARCHAR(191) NOT NULL,
    `startDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `endDate` DATETIME(3) NOT NULL,
    `description` VARCHAR(255) NULL,
    `groupImg` VARCHAR(100) NULL,
    `groupCode` VARCHAR(191) NULL,
    `isActive` TINYINT NULL DEFAULT 1,
    `finalDiscount` DOUBLE NULL,
    `owner_commission` DOUBLE NULL DEFAULT 0,

    INDEX `group_FK`(`groupMasterId`),
    PRIMARY KEY (`groupId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `help_center` (
    `phone` INTEGER NOT NULL,
    `email` VARCHAR(45) NOT NULL,
    `description` VARCHAR(45) NULL,
    `files` VARCHAR(45) NULL,

    PRIMARY KEY (`phone`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `order` (
    `orderId` VARCHAR(191) NOT NULL,
    `orderDate` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `userId` VARCHAR(191) NOT NULL,
    `groupId` VARCHAR(191) NULL,
    `subTotal` INTEGER NULL DEFAULT 0,
    `total` INTEGER NULL DEFAULT 0,
    `salesTax` FLOAT NULL,
    `delivery` FLOAT NULL,
    `greenFee` FLOAT NULL,
    `tipDelivery` FLOAT NULL,
    `paymentIntent` VARCHAR(191) NULL,
    `shippingAddress` TEXT NULL,
    `refund_amount` DECIMAL(10, 2) NULL,

    INDEX `userId`(`userId`),
    PRIMARY KEY (`orderId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product` (
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
    `retailPrice` INTEGER NOT NULL DEFAULT 0,
    `costPrice` INTEGER NOT NULL DEFAULT 0,
    `stock` INTEGER NOT NULL DEFAULT 0,
    `categoryId` INTEGER NULL,

    INDEX `product_FK`(`categoryId`),
    PRIMARY KEY (`skuid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` VARCHAR(255) NOT NULL,
    `firstname` VARCHAR(191) NULL,
    `lastname` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `emailVerified` DATETIME(3) NULL,
    `image` VARCHAR(191) NULL,
    `password` VARCHAR(191) NULL,
    `role` ENUM('GROUPMASTER', 'GROUPMEMBER') NULL,
    `address` VARCHAR(191) NULL,
    `phone` BIGINT NULL,
    `birthday` DATETIME(3) NULL,
    `username` VARCHAR(100) NULL,
    `postCode` VARCHAR(191) NULL,
    `name` VARCHAR(255) NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wallet` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` VARCHAR(255) NOT NULL,
    `amount` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `discount_rate` (
    `groupId` VARCHAR(191) NOT NULL,
    `discountRate` DECIMAL(10, 0) NULL,
    `memberCount` INTEGER NULL DEFAULT 0,

    PRIMARY KEY (`groupId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `group_member` (
    `groupMemberId` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `groupId` VARCHAR(191) NOT NULL,

    INDEX `GroupMember_groupId_fkey`(`groupId`),
    INDEX `groupmember_FK`(`userId`),
    PRIMARY KEY (`groupMemberId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `love_list` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` VARCHAR(255) NOT NULL,
    `skuid` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `shipping_address` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` VARCHAR(255) NULL,
    `firstName` VARCHAR(255) NULL,
    `lastName` VARCHAR(255) NULL,
    `address1` TEXT NULL,
    `address2` TEXT NULL,
    `postalCode` VARCHAR(50) NULL,
    `city` VARCHAR(50) NULL,
    `isPrimaryAddress` TINYINT NULL DEFAULT 0,

    INDEX `userIdfxxxaddress`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `account` ADD CONSTRAINT `Account_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `order` ADD CONSTRAINT `Order_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `group_member` ADD CONSTRAINT `GroupMember_groupId_fkey` FOREIGN KEY (`groupId`) REFERENCES `group`(`groupId`) ON DELETE RESTRICT ON UPDATE CASCADE;

