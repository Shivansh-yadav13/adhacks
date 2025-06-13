import { NextRequest, NextResponse } from "next/server";
import { listObjects } from "@/lib/aws";

export async function GET(request: NextRequest) {
  const userId = request.nextUrl.searchParams.get("userId");
  if (!userId) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 });
  }

  const creatives = await listObjects(userId);

  if (!creatives || creatives.length === 0) {
    return NextResponse.json([]);
  }

  return NextResponse.json(creatives);
}
