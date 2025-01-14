import React, { useState } from 'react'; 
import { Plus } from 'luucide-react';
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
              <form action=""></form>

            )}

        </div>
    )
} 