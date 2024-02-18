import db from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (req: any) => {
  const tasks = await db.task.findMany();
  return NextResponse.json({ data: tasks });
};

export const POST = async (req: any) => {
  const data = await req.json();
  const task = await db.task.create({ data: { content: data.content } });
  return NextResponse.json({ data: task });
};
