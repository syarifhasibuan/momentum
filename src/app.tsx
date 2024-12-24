import { HeadingOne } from "@/components/ui/typography";
import { TaskManagement } from "@/modules/tasks/task-management";

export function App() {
  return (
    <div className="p-3">
      <HeadingOne className="text-center p-2">Momentum</HeadingOne>
      <p className="text-center p-2 pt-0">A simple task management app.</p>

      <TaskManagement />
    </div>
  );
}
