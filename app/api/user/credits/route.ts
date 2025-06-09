import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const { amount } = await request.json();

  if (!id) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 });
  }

  if (!amount || typeof amount !== "number") {
    return NextResponse.json(
      { error: "Valid amount is required" },
      { status: 400 }
    );
  }

  try {
    const user = await prisma.user.update({
      where: { id },
      data: {
        credits: {
          increment: amount,
        },
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error("Failed to update user credits:", error);
    return NextResponse.json(
      { error: "Failed to update user credits" },
      { status: 500 }
    );
  }
}
