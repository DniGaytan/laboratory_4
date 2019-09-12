
function addTodo(text) {
  var addedDiv = document.createElement("div");
  var section1 = document.createElement("section");
  var section2 = document.createElement("section");
  addedDiv.className = "todoItem ";
  addedDiv.classList += "alert alert-success";
  section1.innerHTML = "<p>" + text + "</p>";
  section2.innerHTML = '<input type="checkbox" class="checkboxInput"><label class="checkboxText" for="checkboxInput">Finished</label>'
  addedDiv.appendChild(section1);
  addedDiv.appendChild(section2);
  document.getElementById("listOfTodosId").appendChild(addedDiv);
}

function markAllTodos() {
  var todoCheckboxes = document.getElementsByClassName("checkboxInput");
  for (var i = 0; i < todoCheckboxes.length; i++) {
    todoCheckboxes[i].checked = true;
  }
}

function clearAllTodos() {
  var todoCheckboxes = document.getElementsByClassName("checkboxInput");
  for (var i = 0; i < todoCheckboxes.length; i++) {
    todoCheckboxes[i].checked = false;
  }
}

function deleteAllTodos() {
  var todoCheckboxes = document.getElementsByClassName("todoItem");
  for (var i = 0; i < todoCheckboxes.length; i++) {
    todoCheckboxes[i].remove();
    i--;
  }
}
