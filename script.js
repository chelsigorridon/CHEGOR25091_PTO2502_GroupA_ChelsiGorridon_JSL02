let task1 = {
  title: prompt("Enter a title for Task 1:"),
  description: prompt("Enter a description for Task 1:"),
  status: prompt("Enter a status for Task 1 TODO, DOING or DONE:").toLowerCase()
};
if (task1.status !== "todo" && task1.status !== "doing" && task1.status !== "done"){
  alert("Invalid Status. Please enter 'todo' 'doing' or 'done'");
} 

console.log(task1);

let task2 = {
  title: prompt("Enter a title for Task 2:"),
  description: prompt("Enter a description for Task 2:"),
  status: prompt("Enter a status for Task 2 TODO, DOING or DONE:").toLowerCase()
};
if (task2.status !== "todo" && task2.status !== "doing" && task2.status !== "done") {
  alert("Invalid Status. Please enter 'todo' 'doing' or 'done'");
}

console.log(task2);