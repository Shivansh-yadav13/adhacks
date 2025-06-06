import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  const { id, email, name, profileUrl } = await request.json();

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

  let user = await prisma.user.findUnique({
    where: { id },
  });

  if (user) {
    return NextResponse.json(user);
  }

  user = await prisma.user.create({
    data: { id, email, name, profileUrl },
  });

  return NextResponse.json(user);
}
