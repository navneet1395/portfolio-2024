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

export async function POST(req) {
  try {
    const body = await req.json(); // Parse the request body
    const { parentName, newMember } = body;

    await connectToDatabase();

    // Find the parent node
    const parentQuery = "SELECT * FROM family_tree WHERE name = $1";
    const parentResult = await client.query(parentQuery, [parentName]);
    if (parentResult.rows.length === 0) {
      return NextResponse.json(
        { success: false, message: "Parent not found" },
        { status: 404 }
      );
    }

    const parentId = parentResult.rows[0].id;

    // Insert the new member
    const insertQuery =
      "INSERT INTO family_tree (name, parent_id) VALUES ($1, $2) RETURNING *";
    const insertResult = await client.query(insertQuery, [
      newMember.name,
      parentId,
    ]);

    // Fetch the updated tree structure
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
    console.error("Error updating family tree:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
