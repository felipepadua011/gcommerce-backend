import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const roleUserSeed = await prisma.role.upsert({
    where: { id: 1 },
    update: {},
    create: {
      role: false,
    },
  });

  const roleAdminSeed = await prisma.role.upsert({
    where: { id: 2 },
    update: {},
    create: {
      role: true,
    },
  });

  const adminSeed = await prisma.usuario.upsert({
    where: { email: "admin@seed.com" },
    update: {},
    create: {
      email: "admin@seed.com",
      nome: "AdminSeed",
      senha: "$2b$10$3TfMrWr6KdjDju0mk1bDpOaz3wd/EVt0.RnvavFqSfYA9.K9Xg29a",
      //senha: "admin"
      isAdmin: 2,
    },
  });

  const userSeed = await prisma.usuario.upsert({
    where: { email: "user@seed.com" },
    update: {},
    create: {
      email: "user@seed.com",
      nome: "UserSeed",
      senha: "$2b$10$mSs7Yq/oaXzRnXd5PCvtS.FH2LSIjajRSHHfqN4h8uoFHcrrThVxC",
      //senha: "user"
      isAdmin: 1,
    },
  });

  const produto1Seed = await prisma.produto.upsert({
    where: { id: 1 },
    update: {},
    create: {
      produto1: "29.14.1159",
      nome: "produto 1",
      descricao: "branca, regata, com desenho.",
      colecao: "verao",
      grife: "bobo",
      disponivel: 0,
    },
  });

  const produto2Seed = await prisma.produto.upsert({
    where: { id: 2 },
    update: {},
    create: {
      produto1: "29.14.1160",
      nome: "produto 2",
      descricao: "preta, manga curta, com desenho.",
      colecao: "primavera",
      grife: "nike",
      disponivel: 0,
    },
  });

  const produto3Seed = await prisma.produto.upsert({
    where: { id: 3 },
    update: {},
    create: {
      produto1: "29.14.1161",
      nome: "Produto 3",
      descricao: "verde, manga comprida, sem desenho.",
      colecao: "inverno",
      grife: "lacoste",
      disponivel: 0,
    },
  });

const produto4Seed = await prisma.produto.upsert({
    where: { id: 4 },
    update: {},
    create: {
      produto1: "29.14.1162",
      nome: "Produto 4",
      descricao: "verde, manga curta",
      colecao: "inverno",
      grife: "lacoste",
      disponivel: 0,
    },
  });

const produto5Seed = await prisma.produto.upsert({
    where: { id: 5 },
    update: {},
    create: {
      produto1: "29.14.1163",
      nome: "Produto 5",
      descricao: "verde, manga comprida, sem desenho.",
      colecao: "inverno",
      grife: "lacoste",
      disponivel: 0,
    },
  });

  const produto6Seed = await prisma.produto.upsert({
    where: { id: 6 },
    update: {},
    create: {
      produto1: "29.14.1164",
      nome: "´Produto 6",
      descricao: "verde, manga comprida, sem desenho.",
      colecao: "inverno",
      grife: "lacoste",
      disponivel: 0,
    },
  });

  const produto7Seed = await prisma.produto.upsert({
    where: { id: 7 },
    update: {},
    create: {
      produto1: "29.14.1165",
      nome: "Produto 7",
      descricao: "verde, manga comprida, sem desenho.",
      colecao: "inverno",
      grife: "lacoste",
      disponivel: 0,
    },
  });

  const produto8Seed = await prisma.produto.upsert({
    where: { id: 8 },
    update: {},
    create: {
      produto1: "29.14.1166",
      nome: "Produto 8",
      descricao: "verde, manga comprida, sem desenho.",
      colecao: "inverno",
      grife: "lacoste",
      disponivel: 0,
    },
  });

  const produto9Seed = await prisma.produto.upsert({
    where: { id: 9 },
    update: {},
    create: {
      produto1: "29.14.1167",
      nome: "Produto 9",
      descricao: "verde, manga comprida, sem desenho.",
      colecao: "inverno",
      grife: "lacoste",
      disponivel: 0,
    },
  });

  const produto10Seed = await prisma.produto.upsert({
    where: { id: 10 },
    update: {},
    create: {
      produto1: "29.14.1168",
      nome: "Produto 10",
      descricao: "verde, manga comprida, sem desenho.",
      colecao: "inverno",
      grife: "lacoste",
      disponivel: 0,
    },
  });

  const produto11Seed = await prisma.produto.upsert({
    where: { id: 11 },
    update: {},
    create: {
      produto1: "29.14.1169",
      nome: "Produto nao alterado em massa",
      descricao: "verde, manga comprida, sem desenho.",
      colecao: "inverno",
      grife: "lacoste",
      disponivel: 0,
    },
  });

  console.log({ produto1Seed });
  console.log({ produto2Seed });
  console.log({ produto3Seed });
  console.log({ produto4Seed });
  console.log({ produto5Seed });
  console.log({ produto6Seed });
  console.log({ produto7Seed });
  console.log({ produto8Seed });
  console.log({ produto9Seed });
  console.log({ produto10Seed });
  console.log({ produto11Seed });
  console.log({ adminSeed });
  console.log({ userSeed });
  console.log({ roleAdminSeed });
  console.log({ roleUserSeed });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
