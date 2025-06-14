import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  const { amount, userId } = await request.json();

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const newCredits = user.credits - amount;

  const updatedUser = await prisma.user.update({
    where: { id: userId },
    data: {
      credits: newCredits,
    },
    select: {
      id: true,
      email: true,
      name: true,
      profileUrl: true,
      credits: true,
    },
  });

  return NextResponse.json({ user: updatedUser });
}
