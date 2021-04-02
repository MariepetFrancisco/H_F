var taskInput = document.getElementById("add-items");
var addButton = document.getElementById("addButton");
var incompleteTasks = document.getElementById("listed-items");
var completedTasks = document.getElementById("completed-items");

var createNewTask = function(taskName) {
    var listItem = document.createElement("li");
    var checkBox = document.createElement("input");
    var label = document.createElement("label");
    var deleteButton = document.createElement("button");
	var editInput=document.createElement("input");

    checkBox.type = "checkBox";
    editInput.type="text";
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";
    label.innerText = taskName;
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(deleteButton);

    return listItem;
}


var addTask = function() {
    if (taskInput.value == "") {
        alert("Task to be added should not be empty!");
        return;
    }
    var listItem = createNewTask(taskInput.value);
    incompleteTasks.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
    taskInput.value = "";

}

var deleteTask = function() {
    var listItem = this.parentNode;
    var ul = listItem.parentNode;
    ul.removeChild(listItem);
}

var taskCompleted = function() {
    var listItem = this.parentNode;
    completedTasks.appendChild(listItem);
    bindTaskEvents(listItem, taskIncomplete);
}

var taskIncomplete = function() {
    var listItem = this.parentNode;
    incompleteTasks.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
}


var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
    var checkBox = taskListItem.querySelector('input[type="checkbox"]');
    var deleteButton = taskListItem.querySelector("button.delete");
    deleteButton.onclick = deleteTask;
    checkBox.onchange = checkBoxEventHandler;
}
addButton.onclick = addTask;
