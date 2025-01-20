import { TaskItemProps } from '../lib/Types';

export const TaskItem: React.FC<TaskItemProps> = ({task, handleDragStart}) => {
    return (
        <div
        draggable="true"
        onDragStart={(e) => handleDragStart(e, task)}
        className="mb-2 cursor-grab rounded-lg border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing" 
        >
            <div className="flex flex-col gap-2">
                <p className="text-sm text-neutral-100">{task.title}</p>
                {task.time && (
                    <span className="text-xs text-neutral-400">
                        Time: {task.time}
                    </span>
                )}
            </div>

        </div>
    )
}

