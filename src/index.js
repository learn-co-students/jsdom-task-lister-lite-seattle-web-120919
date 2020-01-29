document.addEventListener("DOMContentLoaded", function() {
  // your code here

  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  const newTaskPriority = document.getElementById("new-task-priority");



  newTaskForm.addEventListener("submit", createNewTask);




});

const createNewTask = event => {
  event.preventDefault();
  //stop form from trying to submit
  const newTaskDescription = document.getElementById("new-task-description");
  const listItems = document.createElement("li");
  listItems.innerText = newTaskDescription.value;

  appendNewTask(listItems);
  event.target.reset();
};

const appendNewTask = task => {
  const tasksUl = document.getElementById("tasks");
  tasksUl.appendChild(task);
};

const tasksUl = document.getElementById("tasks");


tasksUl.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") {
    taskList.deleteTask(e.target.dataset.description);
    renderApp();
  }
});