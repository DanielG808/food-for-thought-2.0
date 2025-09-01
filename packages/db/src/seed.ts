import { PrismaClient } from "../generated/prisma";
import { JsonValue } from "@prisma/client/runtime/library";
import { chiliCrispChicken } from "./seeds/recipes/chili-crisp-chicken";
import { srirachaTurkeyMeatballs } from "./seeds/recipes/sriracha-turkey-meatballs";

const prisma = new PrismaClient();

const SEED_CLERK_ID =
  process.env.SEED_CLERK_ID ?? "user_seed_2aBcDeFGhIjkLmNoPqRsTuVwXy";

const J = (v: unknown): JsonValue => v as JsonValue;

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

  const recipes = [chiliCrispChicken, srirachaTurkeyMeatballs];

  for (const r of recipes) {
    await prisma.recipe.create({
      data: {
        userId: user.id,
        title: r.title,
        description: r.description ?? null,
        ingredients: J(r.ingredients),
        body: J(r.body),
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
