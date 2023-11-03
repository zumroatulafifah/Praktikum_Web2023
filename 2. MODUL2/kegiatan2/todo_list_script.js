// // document.addEventListener("DOMContentLoaded", function () {
// //   const taskInput = document.getElementById("task");
// //   const addButton = document.querySelector(".todo-app button");
// //   const taskList = document.getElementById("taskList");

// //   addButton.addEventListener("click", addTask);

// //   taskList.addEventListener("click", function (event) {
// //     if (event.target.classList.contains("delete")) {
// //       deleteTask(event.target.parentElement);
// //     } else if (event.target.classList.contains("edit")) {
// //       editTask(event.target.parentElement);
// //     }
// //   });

// //   // function addTask() {
// //   //   const taskText = taskInput.value.trim();
// //   //   if (taskText === "") return;

// //   //   const li = document.createElement("li");
// //   //   li.innerHTML = `
// //   //   <span>${taskText}</span>
// //   //   <button class="edit"><i class="fas fa-edit"></i></button>
// //   //   <button class="delete"><i class="fas fa-trash"></i></button>
// //   // `;

// //   //   taskList.appendChild(li);

// //   //   taskInput.value = "";



const taskInput = document.getElementById("task");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value;
  if (taskText.trim() !== "") {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${taskText}</span>
      <button class="edit" onclick="editTask(this.parentElement)"><i class="fas fa-edit"></i></button>
      <button class="delete" onclick="deleteTask(this.parentElement)"><i class="fas fa-trash"></i></button>
    `;

    taskList.appendChild(li);

    taskInput.value = "";
  }
}

function editTask(taskItem) {
  const span = taskItem.querySelector("span");
  const updatedTask = prompt("Edit tugas:", span.textContent);

  if (updatedTask !== null) {
    span.textContent = updatedTask;
  }
}

function deleteTask(taskItem) {
  taskItem.remove();
}
