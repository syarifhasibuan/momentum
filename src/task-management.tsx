import { NewTaskForm } from "@/components/features/new-task-form";
import { ExistingTasks } from "@/components/features/exisiting-tasks";
import { HeadingOne } from "@/components/features/typography";

export function TaskManagement() {
  return (
    <div className="p-3">
      <HeadingOne className="text-center p-2">Momentum</HeadingOne>
      <p className="text-center p-2 pt-0">A simple task management app.</p>
      <div className="flex flex-col items-center gap-4 md:flex-row md:items-start">
        <NewTaskForm />
        <ExistingTasks />
      </div>
    </div>
  );
}