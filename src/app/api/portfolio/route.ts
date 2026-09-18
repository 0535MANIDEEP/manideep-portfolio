import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  const supabase = getSupabaseAdmin();
  const body = await req.json();
  const { section, data } = body;

  if (!section || !data) {
    return NextResponse.json(
      { error: "section and data are required" },
      { status: 400 }
    );
  }

  const { error } = await supabase
    .from("portfolio_sections")
    .upsert({ section, data, updated_at: new Date().toISOString() }, { onConflict: "section" });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
