function makeNewTask(taskDescription) {
  let taskList = document.querySelector("ul");
  let newTaskItem = document.createElement("li");
  newTaskItem.textContent = taskDescription;
  taskList.appendChild(newTaskItem);
}

document.addEventListener("DOMContentLoaded", () => {
  let taskForm = document.querySelector("form")
  taskForm.addEventListener("submit", function (event) {
    event.preventDefault()
    makeNewTask(event.target.task.value);
    event.target.reset
  })
});
