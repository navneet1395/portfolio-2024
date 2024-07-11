import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const filePath = path.join(process.cwd(), "familyTree.json");
    const jsonData = fs.readFileSync(filePath);
    const data = JSON.parse(jsonData);

    const addMember = (node, parentName, newMember) => {
      if (node.name === parentName) {
        node.children = node.children || [];
        node.children.push(newMember);
      } else if (node.children) {
        node.children.forEach((child) =>
          addMember(child, parentName, newMember)
        );
      }
    };

    const body = await req.json();
    const { parentName, newMember } = body;

    addMember(data, parentName, newMember);

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error("Error updating family tree:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
