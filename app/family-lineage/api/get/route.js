import fs from "fs";
import path from "path";

// app/api/route.js 👈🏽

import { NextResponse } from "next/server";

// To handle a GET request to /api
export async function GET(request) {
  // Do whatever you want
  const filePath = path.join(process.cwd(), "familyTree.json");
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);
  return NextResponse.json({ data }, { status: 200 });
}
