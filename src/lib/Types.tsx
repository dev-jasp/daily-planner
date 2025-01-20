export interface Task {
    id: string;
    title: string;
    time?: string;
    day: string;
  }
  
  export interface DayColumnProps {
    day: string;
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  }
  
  export interface TaskItemProps {
    task: Task;
    handleDragStart: (e: React.DragEvent, task: Task) => void;
  }
  
  export interface AddTaskProps {
    day: string;
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  }
  
  export interface DeleteZoneProps {
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  }