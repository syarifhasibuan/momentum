export type Task = {
  id: number;
  title: string;
  description?: string;
  category?: string;
  date?: Date;
};

export function generateId(tasks: Task[]) {
  return tasks.reduce((maxId, task) => Math.max(task.id, maxId), 0) + 1;
}

export function useTasks() {
  const tasks: Task[] = JSON.parse(localStorage.getItem("tasks") || "[]");
  const tasksMap = tasks.map((task) => ({
    ...task,
    date: task.date ? new Date(task.date) : undefined,
  }));
  return tasksMap;
}

export function saveTasks(tasks: Task[]) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

export function saveDoneTasks(tasks: Task[]) {
  localStorage.setItem("doneTasks", JSON.stringify(tasks));
}

export function useDoneTasks() {
  const tasks: Task[] = JSON.parse(localStorage.getItem("doneTasks") || "[]");
  const tasksMap = tasks.map((task) => ({
    ...task,
    date: task.date ? new Date(task.date) : undefined,
  }));
  return tasksMap;
}
