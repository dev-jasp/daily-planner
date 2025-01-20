import { Header } from './components/Header';
import { PlannerBoard } from './components/PlannerBoard';

const WeeklyPlanner: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-slate-700 text-neutral-50">
      <Header />
      <PlannerBoard />
    </div>
  );
};

export default WeeklyPlanner;