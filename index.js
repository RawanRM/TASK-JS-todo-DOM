// You do not need to change the constants
//SELECT CAT LIST IDS
const CATEGORY_SELECTOR = "categories-list";
const CATEGORY_FILTER = "categories-list-filter";

//MY BUTTONS IDS
let myListButton = document.getElementById("list-button");
let myCatButton = document.getElementById("cat-button");


//tasks is an ARRAY OF OBJECTS!!!
//OBJ nature of tasks in task: 1.the id 2.the title 3.the category 4.the state
let tasks = [];
let categories = [];
//objects for the tasks
const taskobj ={};

// REMOVE ME: SAMPLE FILLING

categories = ["Movies", "Groceries"];
// SAMPLE
renderCategories(categories, CATEGORY_SELECTOR);
renderCategories(categories, CATEGORY_FILTER);
//basically; take whats in tasks, display it in tasks-list section
//of the page.
//SHOW ALL TASKS in tasks, OF tasks-list ON PAGE


//RAWAN PERSONAL TESTING OF CODE
//test the interactive button.

//const for creating task objects faster
function tskObj(id, title, category) {
  this.id = id;
  this.title = title;
  this.category = category;
  // this.done = done;
}

function taskChecked(taskId, checked) {
  // implement the delete task.
  // You are given the task id

  console.log(`${checked ? "" : "UN"}CHECKED TASK`, taskId);
}

//making button clickable and adds to list
myListButton.addEventListener("click",function addTask() {
  //gets id
  const selectedCategory = getSelectedCategoryById(CATEGORY_SELECTOR);
  const taskTitles = getNewTaskText();
  // continue the code here
  tasks.push(new tskObj((tasks.length-1)+1,taskTitles,selectedCategory));
  renderTasks(tasks, "taskslist");

  alert(`Category: ${selectedCategory} | Task: ${taskTitles}`);
});

//making button clickable and adds to list
myCatButton.addEventListener("click",function addCategory() {
  const newCategory = getNewCategoryText();
  // continue the code here
  categories.push(newCategory);
  renderCategories(categories, CATEGORY_SELECTOR);

  alert(`New category was added: ${newCategory}`);
});



function filterTasks() {
  const selectedCategory = getSelectedCategoryById(CATEGORY_FILTER);
  const done = getFilteredDone();
  // continue the code here
  // REMOVE ME: sample alert
  alert(`Category: ${selectedCategory} | done: ${done}`);
}
