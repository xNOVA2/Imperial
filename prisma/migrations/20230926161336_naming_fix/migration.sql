/*
  Warnings:

  - You are about to drop the column `Company_Name` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `Item_Description` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `Item_type` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `Model_No` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `Product_url` on the `Post` table. All the data in the column will be lost.
  - Added the required column `CompanyName` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ItemDescription` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ItemType` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ModelNo` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ProductUrl` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "Company_Name",
DROP COLUMN "Item_Description",
DROP COLUMN "Item_type",
DROP COLUMN "Model_No",
DROP COLUMN "Product_url",
ADD COLUMN     "CompanyName" TEXT NOT NULL,
ADD COLUMN     "ItemDescription" TEXT NOT NULL,
ADD COLUMN     "ItemType" TEXT NOT NULL,
ADD COLUMN     "ModelNo" TEXT NOT NULL,
ADD COLUMN     "ProductUrl" TEXT NOT NULL;
