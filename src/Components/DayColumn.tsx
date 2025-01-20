import React, { useState } from 'react';
import { TaskITem} from '../Components/TaskItem';
import { AddTask } from './AddTask';
import { DayColumnProps, Task } from '../lib/Types';

export const DayColumn: React.FC<DayColumnProps> = ({ day, tasks, setTasks }) => {
  const [active, setActive] = useState(false);

  const handleDragStart = (e: React.DragEvent, task: Task) => {
    e.dataTransfer.setData("taskId", task.id);
  };

  const handleDragEnd = (e: React.DragEvent) => {
    const taskId = e.dataTransfer.getData("taskId");
    setActive(false);

    const copy = [...tasks];
    let taskToTransfer = copy.find((t) => t.id === taskId);
    if (!taskToTransfer) return;

    taskToTransfer = { ...taskToTransfer, day };
    const updatedTasks = copy.filter((t) => t.id !== taskId);
    updatedTasks.push(taskToTransfer);

    setTasks(updatedTasks);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setActive(true);
  };

  const handleDragLeave = () => {
    setActive(false);
  };

  const filteredTasks = tasks.filter((t) => t.day === day);

  return (
    <div className="w-72 shrink-0">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-medium text-violet-200">{day}</h3>
        <span className="rounded text-sm text-neutral-400">
          {filteredTasks.length} tasks
        </span>
      </div>
      <div
        onDrop={handleDragEnd}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`min-h-[500px] w-full rounded-lg transition-colors ${
          active ? "bg-neutral-800/50" : "bg-neutral-800/20"
        } p-4`}
      >
        {filteredTasks.map((task) => (
          <TaskITem key={task.id} task={task} handleDragStart={handleDragStart} />
        ))}
        <AddTask day={day} setTasks={setTasks} />
      </div>
    </div>
  );
};
