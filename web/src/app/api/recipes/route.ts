import { getAllRecipes } from "@/lib/api/recipes";
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
