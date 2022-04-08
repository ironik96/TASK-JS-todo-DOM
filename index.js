// You do not need to change the constants
const CATEGORY_SELECTOR = "categories-list";
const CATEGORY_FILTER = "categories-list-filter";

let tasks = [];
let categories = ["Uncategorized"];
const renderCat = (categories) => {
  renderCategories(categories, CATEGORY_SELECTOR);
  renderCategories(["all", ...categories], CATEGORY_FILTER);
};

renderCat(categories);

function taskChecked(taskId, checked) {
  // implement the delete task.
  // You are given the task id
  const task = tasks.find((task) => task.id === taskId);
  task.done = checked;
  renderTasks(tasks, "tasks-list");
}

function addTask() {
  const selectedCategory = getSelectedCategoryById(CATEGORY_SELECTOR);
  const taskTitle = getNewTaskText();
  // continue the code here
  tasks.push({
    id: tasks.length,
    title: taskTitle,
    category: selectedCategory,
    done: false,
  });
  renderTasks(tasks, "tasks-list");
}

function addCategory() {
  const newCategory = getNewCategoryText();
  // continue the code here
  categories.push(newCategory);
  renderCat(categories);
}

function filterTasks() {
  const selectedCategory = getSelectedCategoryById(CATEGORY_FILTER);
  const done = getFilteredDone();
  // continue the code here
  let filteredTasks;
  if (selectedCategory === "all")
    filteredTasks = done ? tasks.filter((task) => task.done) : tasks;
  else
    filteredTasks = tasks.filter((task) =>
      done
        ? task.done && task.category === selectedCategory
        : task.category === selectedCategory
    );
  renderTasks(filteredTasks, "tasks-list");
}
