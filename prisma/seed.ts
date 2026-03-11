import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.upsert({
    where: { telegramId: "1" },
    update: {},
    create: { telegramId: "1", firstName: "Admin", username: "admin" }
  });
}

main().finally(() => prisma.$disconnect());
