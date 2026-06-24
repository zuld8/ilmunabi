/**
 * GET /api/keep-alive
 *
 * Lightweight ping endpoint designed to prevent Supabase free-tier cold starts.
 * Point UptimeRobot (or any uptime monitor) to:
 *   https://ilmunabi.vercel.app/api/keep-alive
 * and set the check interval to every 5 minutes.
 *
 * The route runs a minimal, read-only query against Supabase so the connection
 * pool stays warm without touching any user data.
 */

import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Use the public anon key — this endpoint is intentionally public
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export async function GET() {
  const start = Date.now();

  try {
    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    // Minimal read — just fetch a single row from the public profiles table
    const { error } = await supabase
      .from("profiles")
      .select("id")
      .limit(1)
      .maybeSingle();

    const elapsed = Date.now() - start;

    if (error) {
      return NextResponse.json(
        { ok: false, error: error.message, elapsed_ms: elapsed },
        { status: 500 }
      );
    }

    return NextResponse.json({
      ok: true,
      message: "Supabase is awake 🟢",
      elapsed_ms: elapsed,
      timestamp: new Date().toISOString(),
    });
  } catch (err: unknown) {
    const elapsed = Date.now() - start;
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json(
      { ok: false, error: message, elapsed_ms: elapsed },
      { status: 500 }
    );
  }
}

// Allow Vercel to cache-bust this endpoint on every request
export const dynamic = "force-dynamic";
