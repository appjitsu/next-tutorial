import Link from "next/link";

import EditForm from "@/components/EditForm";
import { getTask } from "@/utils/actions";

type Task = {
  id: string;
  content: string;
  completed: boolean;
};

type TaskDetailPageParams = {
  id: string;
};

const TaskDetailPage = async ({ params }: { params: TaskDetailPageParams }) => {
  const task = (await getTask(params.id)) as Task;

  return (
    <>
      <div className="">
        <Link
          href="/tasks"
          className="btn btn-accent mb-16"
        >
          BACK TO TASKS
        </Link>
        <EditForm task={task} />
      </div>
    </>
  );
};

export default TaskDetailPage;
