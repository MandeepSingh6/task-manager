import React, { useContext, useEffect } from "react";
import { Context } from "../components/GlobalContext";
import { useNavigate } from "react-router-dom";

const handleToggle = (id, setTasks) => {
  setTasks((prev) =>
    prev.map((task) => {
      if (task.id == id) {
        return { ...task, complete: !task.complete, progress: !task.complete };
      } else {
        return task;
      }
    })
  );
};

const handleStartStop = (id, setTasks) => {
  setTasks((prev) =>
    prev.map((task) => {
      if (task.id === id) {
        return { ...task, progress: !task.progress };
      } else {
        return task;
      }
    })
  );
};
const handleDelete = (id, setTasks) => {
  setTasks((prev) =>
    prev.filter((task) => {
      if (task.id !== id) {
        return task;
      }
    })
  );
};

const HomePage = () => {
  const navigate = useNavigate();
  const context = useContext(Context);
  const { tasks, setTasks, setInput } = context;

  useEffect(() => {
    setInput("");
  }, []);

  return (
    <div className="px-4">
      {tasks.length > 0 ? (
        <h2 className="text-xl font-bold mt-4">List of Tasks</h2>
      ) : (
        <h2 className="text-2xl text-center mt-12">No Task Added!</h2>
      )}
      <div className="flex gap-2 flex-col">
        {tasks.map((task) => (
          <div
            className="w-[70%] flex items-center justify-between border-2 px-2 py-1 border-[#6b12a6] rounded"
            key={task.id}
          >
            <div className="mb-1">
              <input
                type="checkbox"
                checked={task.complete}
                onChange={() => handleToggle(task.id, setTasks)}
                name={task.title}
                id={task.id}
                className="cursor-pointer  translate-y-[1px]"
              />
              <label
                className={`ml-1 cursor-pointer ${
                  task.complete && "line-through"
                }`}
                htmlFor={task.id}
              >
                {task.title}
              </label>
              <span
                className={
                  task.complete
                    ? "text-[#6b12a6]"
                    : task.progress
                    ? "text-green-700"
                    : ""
                }
              >
                {task.complete
                  ? " (Completed)"
                  : task.progress
                  ? " (in progress)"
                  : ""}
              </span>
            </div>

            <div className="[&>button]:rounded-sm">
              {!task.complete && (
                <button
                  onClick={() => handleStartStop(task.id, setTasks)}
                  className="ml-2 bg-green-600 text-white px-1"
                >
                  {task.progress ? "Stop" : "Start"}
                </button>
              )}
              {task.complete && (
                <button className="ml-2 bg-[#6b12a6]text-white px-2">✔</button>
              )}
              <button
                onClick={() => {
                  setInput(task.title);
                  navigate("new/" + task.id);
                }}
                className="ml-2 bg-green-600 text-white px-1"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(task.id, setTasks)}
                className="ml-2 bg-[#6b12a6] text-white px-1"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
