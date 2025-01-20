import React from 'react';
import { Header } from '../Components/Header'
import { PlannerBoard } from '../Components/PlannerBoard';

const WeeklyPlanner: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-neutral-900 text-neutral-50">
      <Header />
      <PlannerBoard />
    </div>
  );
};

export default WeeklyPlanner;