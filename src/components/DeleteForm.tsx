"use client";
import { deleteTask } from "@/utils/actions";
import { useFormStatus } from "react-dom";

type DeleteFormProps = {
  id: string;
};

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="btn btn-error btn-xs uppercase"
    >
      {pending ? "pending..." : "delete"}
    </button>
  );
};

const DeleteForm = (props: DeleteFormProps) => {
  return (
    <form action={deleteTask}>
      <input
        type="hidden"
        name="id"
        value={props.id}
      />
      <SubmitBtn />
    </form>
  );
};

export default DeleteForm;
