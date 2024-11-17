/*
  Warnings:

  - You are about to drop the column `datail` on the `Book` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Book" DROP COLUMN "datail",
ADD COLUMN     "detail" TEXT;
