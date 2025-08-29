import { usernameCheckSchema } from "@/lib/validations/authSchema";
import { prisma } from "@fft/db";
import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const username = (searchParams.get("username") ?? "").trim();

  try {
    usernameCheckSchema.parse({ username });

    const existing = await prisma.user.findFirst({
      where: { username: { equals: username, mode: "insensitive" } },
      select: { id: true },
    });

    return NextResponse.json(
      existing
        ? { available: false, reason: "taken" as const }
        : { available: true as const },
      {
        headers: { "Cache-Control": "no-store" },
      }
    );
  } catch (e) {
    if (e instanceof ZodError) {
      return NextResponse.json(
        { available: null, reason: "invalid" as const },
        {
          status: 422,
          headers: { "Cache-Control": "no-store" },
        }
      );
    }
    console.error("username availability error:", e);
    return NextResponse.json(
      { available: null, reason: "error" as const },
      {
        status: 500,
        headers: { "Cache-Control": "no-store" },
      }
    );
  }
}
