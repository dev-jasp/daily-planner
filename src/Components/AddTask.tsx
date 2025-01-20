import React, { useState } from 'react'; 
import { CiCirclePlus } from "react-icons/ci";
import { AddTaskProps } from '../lib/Types'; 


export const AddTask: React.FC<AddTaskProps> = ({ day, setTasks }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask = {
      id: Math.random().toString(),
      title: title.trim(),
      time: time.trim(),
      day,
    };

    setTasks((prev) => [...prev, newTask]);
    setTitle("");
    setTime("");
    setIsAdding(false);
  };

  return (
    <div className="mt-2">
      {isAdding ? (
        <form onSubmit={handleSubmit} className="space-y-2">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Task title..."
            className="w-full rounded border border-violet-400 bg-violet-400/20 p-2 text-sm text-neutral-50 placeholder-violet-300 focus:outline-none"
          />
          <input
            type="text"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            placeholder="Time (optional)..."
            className="w-full rounded border border-violet-400 bg-violet-400/20 p-2 text-sm text-neutral-50 placeholder-violet-300 focus:outline-none"
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setIsAdding(false)}
              className="px-3 py-1 text-xs text-neutral-400 hover:text-neutral-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-1 rounded bg-amber-600 px-3 py-1 text-xs text-white hover:bg-amber-500"
            >
              Add Task
              <CiCirclePlus className="h-3 w-3" />
            </button>
          </div>
        </form>
      ) : (
        <button
          onClick={() => setIsAdding(true)}
          className="flex w-full items-center justify-center gap-1 rounded-lg border border-dashed border-neutral-700 p-2 text-xs text-neutral-400 hover:border-violet-400 hover:text-violet-400"
        >
          <CiCirclePlus className="h-4 w-4" />
          Add Task
        </button>
      )}
    </div>
  );
};