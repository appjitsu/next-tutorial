import { createTask } from "@/utils/actions";

const TaskForm = () => {
  return (
    <form action={createTask}>
      <div className="join w-full">
        <input
          name="content"
          type="text"
          placeholder="Task"
          required
          className="input input-bordered join-item w-full"
        />
        <button
          type="submit"
          className="btn btn-primary join-item"
        >
          create task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
