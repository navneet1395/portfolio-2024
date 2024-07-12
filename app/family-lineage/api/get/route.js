// api/getFamilyTree.js (Vercel Serverless Function)
import { Client } from "pg";
import { NextResponse } from "next/server";

const connectionString = process.env.POSTGRES_CONNECTION_STRING;

const client = new Client({
  connectionString,
});

async function connectToDatabase() {
  if (!client._connected) {
    await client.connect();
    client._connected = true;
  }
}

export async function GET(req) {
  await connectToDatabase();

  try {
    const treeQuery = `
      WITH RECURSIVE family_cte AS (
        SELECT id, name, parent_id
        FROM family_tree
        WHERE parent_id IS NULL
        UNION ALL
        SELECT ft.id, ft.name, ft.parent_id
        FROM family_tree ft
        INNER JOIN family_cte fcte ON fcte.id = ft.parent_id
      )
      SELECT * FROM family_cte;
    `;
    const treeResult = await client.query(treeQuery);

    return NextResponse.json(
      { success: true, data: treeResult.rows },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching family tree:", error);
    return NextResponse.json({ success: false, error: error.message },{
      status: 500,});
  }
}
