-- DropForeignKey
ALTER TABLE "ProdutosPrecos" DROP CONSTRAINT "ProdutosPrecos_produtoid_fkey";

-- DropIndex
DROP INDEX "Produto_produto_key";

-- AlterTable
ALTER TABLE "Produto" ALTER COLUMN "produto" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "ProdutosPrecos" ADD CONSTRAINT "ProdutosPrecos_produtoid_fkey" FOREIGN KEY ("produtoid") REFERENCES "Produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
