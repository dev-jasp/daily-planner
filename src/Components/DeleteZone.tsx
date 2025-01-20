import React, { useState } from 'react';
import { CiTrash } from "react-icons/ci";
import { DeleteZoneProps } from '../lib/Types';

export const DeleteZone: React.FC<DeleteZoneProps> = ({ setTasks }) => {
  const [active, setActive] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setActive(true);
  };

  const handleDragLeave = () => {
    setActive(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    const taskId = e.dataTransfer.getData("taskId");
    setTasks((prev) => prev.filter((t) => t.id !== taskId));
    setActive(false);
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={`mt-10 grid h-32 w-32 shrink-0 place-content-center rounded-lg border transition-colors ${
        active
          ? "border-red-500 bg-red-500/20 text-red-500"
          : "border-neutral-500 bg-neutral-500/20 text-neutral-500"
      }`}
    >
      <CiTrash className="h-6 w-6" />
    </div>
  );
};