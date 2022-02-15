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
      nome: "hulk",
      descricao: "branca, regata, com desenho.",
      colecao: "verao",
      grife: "bobo",
      disponivel: 1,
    },
  });

  const produto2Seed = await prisma.produto.upsert({
    where: { id: 2 },
    update: {},
    create: {
      produto1: "29.14.1161",
      nome: "thor",
      descricao: "preta, manga curta, com desenho.",
      colecao: "primavera",
      grife: "nike",
      disponivel: 1,
    },
  });

  const produto3Seed = await prisma.produto.upsert({
    where: { id: 3 },
    update: {},
    create: {
      produto1: "29.14.1160",
      nome: "hulk",
      descricao: "verde, manga comprida, sem desenho.",
      colecao: "inverno",
      grife: "lacoste",
      disponivel: 0,
    },
  });

  console.log({ produto1Seed });
  console.log({ produto2Seed });
  console.log({ produto3Seed });
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
