
import TaskCard from "@/components/TaskCard";
import { TaskModal } from "@/components/TaskModal";
import { createATask } from "@/lib/actions";
import { getTasks } from "@/lib/tasks";

const TaskPage = async () => {
  const tasks = await getTasks();
  // console.log(tasks);
  return (
    <div>
      <div>tasks: {tasks.length}</div>
      <TaskModal createATask={createATask}></TaskModal>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks.map((task) => {
          return <TaskCard key={task.id} task={task} />;
        })}
      </div>
    </div>
  );
};

export default TaskPage;
