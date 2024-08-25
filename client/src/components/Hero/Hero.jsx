import React, { useState } from "react";
import { Toaster, toast } from "sonner";
import { Inbox, Plus } from "lucide-react";

function Hero() {
    const [task, setTask] = useState([
        // {
        //     id: 1,
        //     title: "Create a New Task",
        //     date: "Tue Jun 01 2021",
        //     completed: false,
        // },
    ]);

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
                    {theme === "dark" ? <Inbox color="#fff" size={130} strokeWidth={1.5} /> : <Inbox />}
                    <div className="dark:text-white text-black text-center">
                        <h2 className="font-bold text-6xl pb-4">No Todos Found?</h2>
                        <h4 className="font-medium max-w-md px-3 ">
                            No todo has been added yet. Click the button below
                            to create a new task.
                        </h4>
                    </div>
                    <button
                        type="button"
                        className="rounded-md dark:bg-[#ae7aff] bg-[#ae7aff] px-3 py-2 text-sm font-semibold text-[#121212] shadow-sm hover:opacity-90"
                        >
                        Create a New Task
                    </button>
                </div>
            ) : (
                <div className="flex flex-col items-center w-full max-w-2xl px-4">
                    <div className="mb-4 flex flex-wrap justify-center">
                        {view.map((item, index) => (
                            <button
                                key={index}
                                type="button"
                                className="rounded-md px-3 py-2 text-sm font-semibold dark:bg-[#212121] bg-[#f0f0f0] dark:text-white text-slate-950 dark:hover:bg-[#2a2a2a] hover:bg-[#e0e0e0] shadow-sm mr-2 mb-2">
                                {item}
                            </button>
                        ))}
                    </div>
                    <div className="w-full">
                        <div className="flex">
                            <input
                                className="flex-grow h-10 rounded-l-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:text-white min-w-[300px]"
                                type="text"
                                placeholder="Type to add a new todo"
                            />
                            <button
                                onClick={() =>
                                    toast.success("Task Added Successfully")
                                }
                                className="h-10 rounded-r-md bg-[#ae7aff] px-3 text-sm font-semibold text-[#121212] shadow-sm hover:opacity-90">
                                <Plus />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Hero;
