import courses from "@/database/data_test.json";

import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = NextResponse.json(courses);
    // console.log(res);
    return res;
  } catch {
    return;
  }
}
