"use server";

import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export const getAllTasks = async () => {
  const tasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return tasks;
};

export const createTask = async (formData: FormData) => {
  const content = formData.get("content")?.toString() ?? "";

  await prisma.task.create({
    data: {
      content,
    },
  });
  revalidatePath("/tasks");
};

export const createTaskCustom = async (prevState: any, formData: FormData) => {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  const content = formData.get("content")?.toString() ?? "";
  const Task = z.object({
    content: z.string().min(5),
  });

  try {
    Task.parse({ content });
    await prisma.task.create({
      data: {
        content,
      },
    });

    revalidatePath("/tasks");
    return { message: "success" };
  } catch (error) {
    console.error(error);
    return { message: "error" };
  }
};

export const deleteTask = async (formData: FormData) => {
  const id = formData.get("id")?.toString() ?? "";

  await prisma.task.delete({
    where: {
      id,
    },
  });
  revalidatePath("/tasks");
};

export const getTask = async (id: string) => {
  const task = await prisma.task.findUnique({
    where: {
      id,
    },
  });
  return task;
};

export const updateTask = async (formData: FormData) => {
  const id = formData.get("id")?.toString() ?? "";
  const content = formData.get("content")?.toString() ?? "";
  const completed = formData.get("completed");

  await prisma.task.update({
    where: {
      id,
    },
    data: {
      content,
      completed: completed === "on" ? true : false,
    },
  });
  redirect("/tasks");
};
