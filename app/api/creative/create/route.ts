import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { userId, id, prompt } = await request.json();

  console.log(userId, id, prompt);

  const creative = await prisma.creative.create({
    data: {
      id,
      prompt,
      userId,
    },
  });

  console.log(creative);

  return NextResponse.json(creative);
}
