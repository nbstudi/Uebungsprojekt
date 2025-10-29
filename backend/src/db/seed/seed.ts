import { prisma } from "@lib/prisma";

async function main() {
  // Beispiel: nur seeden, wenn leer
  const count = await prisma.user.count();
  if (count === 0) {
    await prisma.user.create({
      data: { email: "demo@example.com", passwordHash: "not-a-real-hash" },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
