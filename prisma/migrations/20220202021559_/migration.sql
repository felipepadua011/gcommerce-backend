/*
  Warnings:

  - A unique constraint covering the columns `[produto]` on the table `Produto` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `produto` on the `Produto` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "ProdutosPrecos" DROP CONSTRAINT "ProdutosPrecos_produtoid_fkey";

-- AlterTable
ALTER TABLE "Produto" DROP COLUMN "produto",
ADD COLUMN     "produto" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Produto_produto_key" ON "Produto"("produto");

-- AddForeignKey
ALTER TABLE "ProdutosPrecos" ADD CONSTRAINT "ProdutosPrecos_produtoid_fkey" FOREIGN KEY ("produtoid") REFERENCES "Produto"("produto") ON DELETE RESTRICT ON UPDATE CASCADE;
