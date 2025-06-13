import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
  const { userId, creativeId } = await req.json();

  const creative = await prisma.creative.findUnique({
    where: { id: creativeId },
  });

  if (!creative) {
    return NextResponse.json(
      { message: "Creative not found" },
      { status: 404 }
    );
  }
  if (creative.userId !== userId) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  await prisma.creative.delete({
    where: { id: creativeId },
  });

  return NextResponse.json({ message: "Creative deleted successfully" });
}
