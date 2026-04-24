// app/api/job/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = await params;

  const res = await fetch(
    `https://europa.eu/eures/api/jv-searchengine/public/jv/id/${id}?lang=en`,
    {
      headers: {
        // Europa bazen User-Agent ister
        "User-Agent": "Mozilla/5.0",
        Accept: "application/json",
      },
      next: { revalidate: 60 }, // 60sn cache, aşırı istek atmamak için
    }
  );

  const data = await res.json();
  return NextResponse.json(data);
}
