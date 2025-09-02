import { getAllRecipes } from "../../../lib/api/recipes/recipes";
import { recipeCreateSchema } from "../../../lib/validations/recipeSchema";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@fft/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await getAllRecipes();
    return NextResponse.json({ recipes: res }, { status: 200 });
  } catch (error) {
    console.error("GET /api/recipes failed:", error);
    return new NextResponse("Failed to fetch recipes", { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { userId: clerkUserId } = await auth();
    if (!clerkUserId) return new NextResponse("Unauthorized.", { status: 401 });

    const user = await prisma.user.findUnique({
      where: { clerkId: clerkUserId },
      select: { id: true },
    });
    if (!user) return new NextResponse("User not found.", { status: 401 });

    const json = await req.json();
    const parsed = recipeCreateSchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json(
        { errors: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const data = parsed.data;
    const recipe = await prisma.recipe.create({
      data: {
        userId: user.id,
        title: data.title,
        description: data.description ?? null,
        ingredients: data.ingredients,
        body: { steps: data.body.steps },
        prepTime: data.prepTime ?? 0,
        cookTime: data.cookTime ?? 0,
      },
    });

    return NextResponse.json({ recipe }, { status: 201 });
  } catch (error) {
    console.error("POST /api/recipes failed:", error);
    return new NextResponse("Failed to create recipe.", { status: 500 });
  }
}
