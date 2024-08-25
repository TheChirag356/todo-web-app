import React, { useState } from "react";
import { Inbox, Trash2 } from "lucide-react";
import { DialogBox } from "../DialogBox/DialogBox.jsx";

function Hero() {
  const [task, setTask] = useState([
    // {
    //   id: 1,
    //   title: "Task 1",
    //   date: "Tue Jun 01 2021",
    //   completed: false,
    // },
    // {
    //   id: 1,
    //   title: "Task 1",
    //   date: "Tue Jun 01 2021",
    //   completed: true,
    // },
  ]);

  const [showComponent, setShowComponent] = useState(false);

  const toggleComponent = () => {
    setShowComponent(!showComponent);
  };

  function createNewTask(title) {
    const currDate = new Date();
    const newTask = {
      id: Math.floor(Math.random() * 100),
      title,
      date: currDate.toDateString(),
      completed: false,
    };
    setTask(newTask);
  }

  const view = ["All Todos", "Pending", "Completed"];

  const theme = sessionStorage.getItem("theme");

  return (
    <div className="dark:bg-[#121212] min-h-screen relative flex items-center justify-center">
      {task.length === 0 ? (
        <div className="flex flex-col items-center gap-4">
          {theme === "dark" ? (
            <Inbox color="#fff" size={130} strokeWidth={1.5} />
          ) : (
            <Inbox />
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
          {showComponent && <DialogBox />}
        </div>
      ) : (
        <div className="flex flex-col items-center w-full max-w-6xl px-4 gap-2">
          <div className="mb-4 flex flex-wrap justify-center max-w-2xl">
            {view.map((item, index) => (
              <button
                key={index}
                type="button"
                className="rounded-md px-3 py-2 text-sm font-semibold dark:bg-[#212121] bg-[#f0f0f0] dark:text-white text-slate-950 dark:hover:bg-[#2a2a2a] hover:bg-[#e0e0e0] shadow-sm mr-2 mb-2">
                {item}
              </button>
            ))}
          </div>
          <div className="w-full flex flex-col items-center">
            {task.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center justify-between max-w-4xl w-full px-4 py-3 dark:bg-[#212121] bg-[#f0f0f0] dark:text-white text-slate-950 shadow-sm rounded-md mb-2">
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
                        type="button"
                        className="rounded-md px-3 py-2 text-sm font-semibold shadow-sm hover:opacity-90">
                        <Trash2 color="#ffffff" strokeWidth={1.5} />
                      </button>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="rounded-md px-3 py-2 text-sm font-semibold dark:bg-[#ae7aff] bg-[#ae7aff] dark:text-[#121212] shadow-sm hover:opacity-90">
                        {item.completed
                          ? "Mark as Pending"
                          : "Mark as Completed"}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Hero;
