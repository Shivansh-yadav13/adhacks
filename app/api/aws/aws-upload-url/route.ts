import { putObjectUrl } from "@/lib/aws";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { userId, creativeId, fileType } = await req.json();

  const uploadUrl = await putObjectUrl(userId, creativeId, fileType);

  return NextResponse.json({ uploadUrl });
}
