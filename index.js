let input = document.querySelector("input");
let tabletasks = document.querySelector("tbody");
let p = document.querySelector("#p");
let taskToEdit = null;
let tasks = [];
function addTask() {
  let newTask = input.value;
  if (newTask) {
    if (newTask.trim() != "") {
      tasks.push(newTask);
      p.style.display = "none";
      input.value = "";
    } else {
      alert("the input is empty");
    }
  } else {
    alert("the input is empty");
  }
}
function showTask() {
  tabletasks.innerHTML = "";
  tasks.forEach((task, index) => {
    tabletasks.innerHTML += `
    <tr>
      <td>${index + 1}</td>
      <td>${task}</td>
      <td>in prodress</td>
      <td>
        <button type="button" class="btn btn-danger" onclick="deleteTask(${index})">DELETE</button>
        <button type="button" class="btn btn-success" onclick="editTask(${index})">EDIT</button>
      </td>
    </tr>
    `;
  });
}

function deleteTask(taskIndex) {
  tasks.splice(taskIndex, 1);
  showTask();
}

function removeAllTask() {
  tasks = [];
  showTask();
  p.style.display = "block";
}

let btnAdd = document.querySelector("#btnAdd");
let btnSave = document.querySelector("#btnSave");
function editTask(taskIndex) {
  taskToEdit = taskIndex;
  btnAdd.style.display = "none";
  btnSave.style.display = "block";
  input.value = tasks[taskIndex];
}

function saveTask() {
  btnAdd.style.display = "block";
  btnSave.style.display = "none";
  let newTaskValue = input.value;
  input.value = " ";
  tasks[taskToEdit] = newTaskValue;
  showTask();
}
