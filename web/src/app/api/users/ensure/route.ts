import { auth, clerkClient } from "@clerk/nextjs/server";
import { prisma } from "@fft/db";
import { NextResponse } from "next/server";

export async function POST() {
  const { userId } = await auth();
  if (!userId) return new NextResponse("Unauthorized", { status: 401 });

  const user = await (await clerkClient()).users.getUser(userId);
  const primaryEmail =
    user.emailAddresses.find((e) => e.id === user.primaryEmailAddressId)
      ?.emailAddress ?? user.emailAddresses[0]?.emailAddress;

  if (!primaryEmail) {
    return new NextResponse("No email on file for this Clerk user.", {
      status: 422,
    });
  }

  if (!user.username) {
    return new NextResponse("Username is required.", { status: 422 });
  }

  const dbUser = await prisma.user.upsert({
    where: { clerkId: userId },
    update: { email: primaryEmail },
    create: { clerkId: userId, email: primaryEmail, username: user.username },
  });

  return NextResponse.json({ ok: true, user: dbUser });
}
