"use client";
import { createTaskCustom } from "@/utils/actions";
import { StdioNull } from "child_process";
import { useEffect } from "react";
import { useFormStatus, useFormState } from "react-dom";
import toast from "react-hot-toast";

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="btn btn-primary join-item uppercase"
      disabled={pending}
    >
      {pending ? "Please Wait..." : "Create Task"}
    </button>
  );
};

const initialState = {
  message: "",
};

const TaskFormCustom = () => {
  const [state, formAction] = useFormState(createTaskCustom, initialState);
  useEffect(() => {
    if (state.message === "error") {
      toast.error("Error creating task");
      return;
    }
    if (state.message === "success") {
      toast.success("Task created");
      return;
    }
  }, [state]);
  return (
    <form action={formAction}>
      <div className="join w-full">
        <input
          name="content"
          type="text"
          placeholder="Task"
          required
          className="input input-bordered join-item w-full"
        />
        <SubmitBtn />
      </div>
    </form>
  );
};

export default TaskFormCustom;
