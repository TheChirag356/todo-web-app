import React from "react";
import { Inbox, Trash2 } from "lucide-react";
import { Toaster, toast } from "sonner";
import { DialogBox } from "../DialogBox/DialogBox.jsx";

function Hero({ tasks, setTasks }) {
  const [showComponent, setShowComponent] = React.useState(false);

  const toggleComponent = () => {
    setShowComponent(!showComponent);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    toast.success("Task deleted successfully");
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
    toast.success("Task status updated");
  };

  const [tab, setTab] = React.useState("All Todos");

  const view = ["All Todos", "Pending", "Completed"];

  const theme = sessionStorage.getItem("theme");

  return (
    <div className="dark:bg-[#121212] bg-white min-h-screen relative flex items-center justify-center">
      <Toaster richColors />
      {tasks.length === 0 ? (
        <div className="flex flex-col items-center gap-4 text-black dark:text-white">
          {theme === "dark" ? (
            <Inbox size={130} strokeWidth={1.5} />
          ) : (
            <Inbox size={130} strokeWidth={1.5} />
          )}
          <div className="dark:text-white text-black text-center">
            <h2 className="font-bold text-6xl pb-4">No Todos Found?</h2>
            <h4 className="font-medium max-w-md px-3 ">
              No todo has been added yet. Click the button below to create a new
              task.
            </h4>
          </div>
          <button
            type="button"
            className="rounded-md dark:bg-[#ae7aff] bg-[#ae7aff] px-3 py-2 text-sm font-semibold text-white dark:text-[#121212] shadow-sm hover:opacity-90"
            onClick={toggleComponent}>
            Create a New Task
          </button>
          {showComponent && (
            <DialogBox
              onCreateTask={(title) =>
                setTasks([
                  ...tasks,
                  {
                    id: Math.floor(Math.random() * 100),
                    title,
                    date: new Date().toDateString(),
                    completed: false,
                  },
                ])
              }
              onClose={() => setShowComponent(false)}
            />
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center w-full max-w-6xl px-4 gap-2">
          <div className="flex flex-col items-center w-full max-w-6xl px-4 gap-2 min-h-screen">
            <div className="mb-4 flex flex-wrap justify-center max-w-2xl mt-[20vh]">
              {view.map((item, index) => (
                <button
                  key={index}
                  type="button"
                  className="rounded-md px-3 py-2 text-sm font-semibold dark:bg-[#212121] bg-[#f0f0f0] dark:text-white text-slate-950 dark:hover:bg-[#2a2a2a] hover:bg-[#e0e0e0] shadow-sm mr-2 mb-2"
                  onClick={() => {
                    setTab(item);
                    console.log(tab);
                  }}>
                  {item}
                </button>
              ))}
            </div>

            {/* Todos Start here */}
            <div className="flex flex-col items-center w-full max-w-6xl px-4 gap-2 min-h-screen">
              <div className="w-full flex flex-col items-center">
                <div className="w-full max-w-4xl">
                  {tab === "All Todos" && tasks.length > 0
                    ? tasks.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center justify-between w-full px-4 py-3 dark:bg-[#212121] bg-[#f0f0f0] dark:text-white text-slate-950 shadow-sm rounded-md mb-2">
                          <div>
                            <h3 className="font-semibold text-lg">
                              {item.completed ? (
                                <strike> {item.title} </strike>
                              ) : (
                                item.title
                              )}
                            </h3>
                            <p className="text-sm font-medium">{item.date}</p>
                          </div>
                          <div className="max-w-2xl">
                            <div className="flex flex-row-reverse justify-evenly">
                              <button
                                title="delete"
                                type="button"
                                onClick={() => deleteTask(item.id)}
                                className="rounded-md px-3 py-2 text-sm font-semibold shadow-sm hover:opacity-90 text">
                                <Trash2 strokeWidth={1.5} />
                              </button>
                            </div>
                            <div>
                              <button
                                title="completion"
                                type="button"
                                onClick={() => toggleTaskCompletion(item.id)}
                                className="rounded-md px-3 py-2 text-sm font-semibold dark:bg-[#ae7aff] bg-[#ae7aff] dark:text-[#121212] shadow-sm hover:opacity-90">
                                {item.completed
                                  ? "Mark as Pending"
                                  : "Mark as Completed"}
                              </button>
                            </div>
                          </div>
                        </div>
                      ))
                    : tab === "Pending"
                      ? tasks
                          .filter((item) => !item.completed)
                          .map((item) => (
                            <div
                              key={item.id}
                              className="flex items-center justify-between w-full px-4 py-3 dark:bg-[#212121] bg-[#f0f0f0] dark:text-white text-slate-950 shadow-sm rounded-md mb-2">
                              <div>
                                <h3 className="font-semibold text-lg">
                                  {item.completed ? (
                                    <strike> {item.title} </strike>
                                  ) : (
                                    item.title
                                  )}
                                </h3>
                                <p className="text-sm font-medium">
                                  {item.date}
                                </p>
                              </div>
                              <div className="max-w-2xl">
                                <div className="flex flex-row-reverse justify-evenly">
                                  <button
                                    title="delete"
                                    type="button"
                                    onClick={() => deleteTask(item.id)}
                                    className="rounded-md px-3 py-2 text-sm font-semibold shadow-sm hover:opacity-90 text">
                                    <Trash2 strokeWidth={1.5} />
                                  </button>
                                </div>
                                <div>
                                  <button
                                    title="completion"
                                    type="button"
                                    onClick={() =>
                                      toggleTaskCompletion(item.id)
                                    }
                                    className="rounded-md px-3 py-2 text-sm font-semibold dark:bg-[#ae7aff] bg-[#ae7aff] dark:text-[#121212] shadow-sm hover:opacity-90">
                                    {item.completed
                                      ? "Mark as Pending"
                                      : "Mark as Completed"}
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))
                      : tasks
                          .filter((item) => item.completed)
                          .map((item) => (
                            <div
                              key={item.id}
                              className="flex items-center justify-between w-full px-4 py-3 dark:bg-[#212121] bg-[#f0f0f0] dark:text-white text-slate-950 shadow-sm rounded-md mb-2">
                              <div>
                                <h3 className="font-semibold text-lg">
                                  {item.completed ? (
                                    <strike> {item.title} </strike>
                                  ) : (
                                    item.title
                                  )}
                                </h3>
                                <p className="text-sm font-medium">
                                  {item.date}
                                </p>
                              </div>
                              <div className="max-w-2xl">
                                <div className="flex flex-row-reverse justify-evenly">
                                  <button
                                    title="delete"
                                    type="button"
                                    onClick={() => deleteTask(item.id)}
                                    className="rounded-md px-3 py-2 text-sm font-semibold shadow-sm hover:opacity-90 text">
                                    <Trash2 strokeWidth={1.5} />
                                  </button>
                                </div>
                                <div>
                                  <button
                                    title="completion"
                                    type="button"
                                    onClick={() =>
                                      toggleTaskCompletion(item.id)
                                    }
                                    className="rounded-md px-3 py-2 text-sm font-semibold dark:bg-[#ae7aff] bg-[#ae7aff] dark:text-[#121212] shadow-sm hover:opacity-90">
                                    {item.completed
                                      ? "Mark as Pending"
                                      : "Mark as Completed"}
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                </div>
              </div>
            </div>
            {/* todos end here */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Hero;
