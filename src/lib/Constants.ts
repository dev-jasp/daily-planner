import { Task } from './Types';

export const DAYS_OF_WEEK = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ] as const;
  
  export const DEFAULT_TASKS: Task[] = [
    { id: "1", title: "Morning Exercise", time: "06:00 AM", day: "Monday" },
    { id: "2", title: "Team Meeting", time: "10:00 AM", day: "Monday" },
    { id: "3", title: "Lunch with Client", time: "12:30 PM", day: "Tuesday" },
    { id: "4", title: "Project Review", time: "03:00 PM", day: "Wednesday" },
    { id: "5", title: "Yoga Class", time: "07:00 PM", day: "Thursday" },
    { id: "6", title: "Weekly Report", time: "04:00 PM", day: "Friday" },
    { id: "7", title: "Weekend Planning", time: "05:00 PM", day: "Friday" },
    { id: "8", title: "Grocery Shopping", time: "10:00 AM", day: "Saturday" },
    { id: "9", title: "Family Dinner", time: "07:00 PM", day: "Sunday" },
  ];