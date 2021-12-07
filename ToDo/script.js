const tasks = ["putzen", "tanzen", "kochen"]
printTaskList();


document.getElementById("taskList").innerHTML = tasks;

document.getElementById("addTask").addEventListener("click",function(){
  alert("add task");
});

function printTaskList(){
  document.getElementById("taskList").innerHTML = getHTMLTasks();
}


function getHTMLTasks(){
  let html = "";
  tasks.forEach(element => {
    html += "<li>" + element + "</li>";
  });

  return html;
}