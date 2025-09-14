import { useState } from "react";
import AddTaskModal from "./addTaskModal";
import SearchTask from "./SearchTask";
import TaskActions from "./taskActions";
import TaskList from "./TaskList";
export default function TaskBoard() {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn  React",
    description:
      "I want to learn React . It is a popular JavaScript library for building user interfaces. I will start with the official documentation and then move on to some tutorials and projects to practice my skills.",
    tags: ["react", "javascript", "frontend"],
    priority: "high",
    isFavorite: true,
  };
  const [tasks, setTasks] = useState([defaultTask]);
  const [showAddModal, setShowAddModal] = useState(false);

  function handleAddTask(task) {
    console.log("Adding a new task", task);
  }
  return (
    <section className="mb-20" id="tasks">
      {showAddModal && <AddTaskModal onSave={handleAddTask} />}
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask />
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions onAddClick={() => setShowAddModal(true)} />
          <TaskList tasks={tasks} />
        </div>
      </div>
    </section>
  );
}
