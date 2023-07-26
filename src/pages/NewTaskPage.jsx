import React, { useContext, useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { Context } from "../components/GlobalContext";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const NewTaskPage = () => {
  let { id } = useParams("id");
  const [edit, setEdit] = useState(id);
  const { tasks, setTasks, input, setInput } = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (edit) {
      setTasks((prev) =>
        prev.map((task) => {
          if (task.id === id) {
            return { ...task, title: input };
          } else {
            return task;
          }
        })
      );
      setEdit(false);
      toast("Task Edited!");
    } else {
      setTasks((prev) => {
        return [
          ...prev,
          { title: input, complete: false, id: nanoid(), progress: false },
        ];
      });
      toast("Task Added!");
    }
    setInput("");
  };

  return (
    <div>
      <form className="grid place-content-center mt-8" onSubmit={handleSubmit}>
        <div>
          <input
            required
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border-2 pl-1 mr-1"
            type="text"
            placeholder="Enter New Task"
          />
          <button
            className={
              edit
                ? "bg-red-700 border-2 px-4 text-white"
                : "bg-green-700 border-2 px-4 text-white"
            }
            type="submit"
          >
            {edit ? "Edit" : "Add"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewTaskPage;
