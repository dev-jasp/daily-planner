import React, { useState } from 'react';
import { DayColumn } from './DayColumn';
import { DeleteZone } from './DeleteZone';
import { DAYS_OF_WEEK, DEFAULT_TASKS } from '../lib/Constants';
import { Task } from '../lib/Types';

export const PlannerBoard: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(DEFAULT_TASKS);

  return (
    <div className="flex h-full w-full gap-3 overflow-x-auto p-6">
      {DAYS_OF_WEEK.map((day) => (
        <DayColumn
          key={day}
          day={day}
          tasks={tasks}
          setTasks={setTasks}
        />
      ))}
      <DeleteZone setTasks={setTasks} />
    </div>
  );
};