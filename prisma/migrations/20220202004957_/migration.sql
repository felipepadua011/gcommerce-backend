/*
  Warnings:

  - Added the required column `precodesconto` to the `ProdutosPrecos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProdutosPrecos" ADD COLUMN     "precodesconto" DOUBLE PRECISION NOT NULL;
