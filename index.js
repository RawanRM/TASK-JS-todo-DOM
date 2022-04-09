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
function tskObj(id, title, category, done) {
  this.id = id;
  this.title = title;
  this.category = category;
  this.done = done;
  // this.done = done;
}

/** !!! P L E A S E - N O T E !!!!
 * 
 * I cant seem to figure out "taskChecked" function and was stuck here for
 * the majority of the time.
 * I was trying to get the checkbox of the taskItemComponent and
 * added ".checked" for it to return true or false, depending on if checked or not
 * then I tried to store that boolean result in "checked"
 * finally, i created a var theId, it should store the index of 
 * the object I wish to remove from my tasks array
 * if checked is true then i would remove the object using splice.
 * 
 * I understand why Im facing an issue,but I cannot seem to resolve it
 * ISSUES IM FACING:
 * when I add a task, I do not need the "done" key
 * "done" key is needed for when I want to check if the task is checked or not
 * the issue here, is when Im adding a task and pushing it, the "done" argument
 * takes an undefined value.
 * my apologies for the long text.
 */
function taskChecked(taskId, checked) {
  // implement the delete task.
  // You are given the task id
  
  tasks[taskId].done = document.getElementById("task-done").checked;
  checked = tasks[taskId].done;
  let theId = tasks[taskId].id;
  if(checked === true){
    tasks.splice(taskId,1);
  }
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
