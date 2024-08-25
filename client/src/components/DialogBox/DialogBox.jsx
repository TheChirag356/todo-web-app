import { useState } from "react";
import { Toaster, toast } from "sonner";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { SquareCheck } from "lucide-react";

function DialogBox() {
  const [open, setOpen] = useState(true);
  const [input, setInput] = useState("");

  function onConfirm() {
    {
      (e) => setInput(e.target.value);
    }
    if (input.trim() === "") {
      toast.error("Please enter a task", {
        position: "bottom-right",
        duration: 3000,
      });
      return;
    } else {
      toast.success("Task added successfully");
    }
    setOpen(false);
  }

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <Toaster richColors />
      <DialogBackdrop
        transition
        className="fixed inset-0 dark:bg-[#00000097] bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform dark:border-gray-600 dark:border-2 overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95">
            <div className="bg-white dark:bg-[#121212] px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="bg-white dark:bg-[#121212] px-4 pb-4 pt-5 sm:p-6 sm:pb-4 w-full">
                  <DialogTitle
                    as="h3"
                    className="text-base font-semibold leading-6 text-black dark:text-white">
                    Enter your first Task
                  </DialogTitle>
                  <div title="inputtask" className="mt-2 w-full">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Enter your task here"
                      className="w-full px-3 py-2 text-sm font-semibold text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-1 focus:ring-green-500 focus:border-green-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#121212] px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 ">
              <button
                title="Confirmbtn"
                type="button"
                onClick={() => onConfirm()}
                className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto">
                Confirm
              </button>
              <button
                title="Cancelbtn"
                type="button"
                data-autofocus
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">
                Cancel
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}

export { DialogBox };
