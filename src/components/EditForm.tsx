import { updateTask } from "@/utils/actions";

type Task = {
  id: string;
  content: string;
  completed: boolean;
};

type EditFormProps = {
  task: Task;
};

const EditForm = (props: EditFormProps) => {
  const { id, content, completed } = props.task;

  return (
    <form
      action={updateTask}
      className="max-w-sm p-12 border border-base-300 rounded-lg"
    >
      <input
        type="hidden"
        name="id"
        value={id}
      />
      <input
        type="text"
        name="content"
        defaultValue={content}
        required
        className="input input-bordered w-full"
      />
      <div className="form-control my-4">
        <label className="cursor-pointer label">
          <span className="label-text">completed</span>
          <input
            type="checkbox"
            id="completed"
            name="completed"
            defaultChecked={completed}
            className="checkbox checkbox-primary checkbox-sm"
          />
        </label>
      </div>
      <button
        type="submit"
        className="btn btn-primary btn-block btn-sm uppercase"
      >
        save
      </button>
    </form>
  );
};

export default EditForm;
