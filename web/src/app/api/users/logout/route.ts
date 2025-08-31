import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST() {
  const { sessionId } = await auth();

  if (!sessionId)
    return new NextResponse("No active session.", { status: 401 });

  const res = await fetch(`https://api.clerk.dev/v1/sessions/${sessionId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
    },
  });

  if (!res.ok) {
    const text = await res.text();
    return new NextResponse(`Failed to log out: ${text}`, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
