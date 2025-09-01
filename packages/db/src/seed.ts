import { Prisma, PrismaClient } from "../generated/prisma";

import { chiliCrispChicken } from "./seeds/recipes/chili-crisp-chicken";
import { groundPorkRiceBowls } from "./seeds/recipes/ground-pork-rice-bowls";
import { honeySrirachaTurkeyMeatballs } from "./seeds/recipes/honey-sriracha-turkey-meatballs";
import { porkTenderloin } from "./seeds/recipes/pork-tenderloin";
import { slowCookerKoreanBeefNoodles } from "./seeds/recipes/slow-cooker-korean-beef-noodles";

const prisma = new PrismaClient();

const SEED_CLERK_ID =
  process.env.SEED_CLERK_ID ?? "user_seed_2aBcDeFGhIjkLmNoPqRsTuVwXy";

const J = (v: unknown): Prisma.InputJsonValue => v as Prisma.InputJsonValue;

async function main() {
  const user = await prisma.user.upsert({
    where: { clerkId: SEED_CLERK_ID },
    update: {},
    create: {
      clerkId: SEED_CLERK_ID,
      email: "test@example.com",
      username: "testuser",
    },
    select: { id: true },
  });

  const recipes = [
    chiliCrispChicken,
    honeySrirachaTurkeyMeatballs,
    groundPorkRiceBowls,
    porkTenderloin,
    slowCookerKoreanBeefNoodles,
  ];

  for (const r of recipes) {
    await prisma.recipe.create({
      data: {
        userId: user.id,
        title: r.title,
        description: r.description ?? null,
        ingredients:
          r.ingredients === null ? Prisma.JsonNull : J(r.ingredients),
        body: r.body === null ? Prisma.JsonNull : J(r.body),
        prepTime: r.prepTime,
        cookTime: r.cookTime,
      },
    });
  }

  console.log(`✅ Seeded ${recipes.length} recipes for user ${SEED_CLERK_ID}`);
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
