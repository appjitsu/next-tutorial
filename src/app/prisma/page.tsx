import prisma from "@/utils/db";

const prismaHandlers = async () => {
  console.log("prisma example");
  // await prisma.task.create({
  //   data: {
  //     content: "Learn Prisma",
  //   },
  // });

  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return allTasks;
};

const PrismaPage = async () => {
  const tasks = await prismaHandlers();

  if (tasks.length === 0) {
    return <div className="mt-8 font-medium text-lg">No tasks to show...</div>;
  }

  return (
    <div>
      <h1 className="text-7xl">Prisma Page</h1>
      {tasks.map((task) => (
        <h2
          key={task.id}
          className="text-xl py-2"
        >
          {task.content}
        </h2>
      ))}
    </div>
  );
};

export default PrismaPage;
