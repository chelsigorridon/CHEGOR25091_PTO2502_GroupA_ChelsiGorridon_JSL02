
// ===  Main Layout === // 


let firstTask = {
  title: prompt("Enter a title for Task 1:"),
  description: prompt("Enter a description for Task 1:"),
  status: ""
};

// Repeat until valid status // 
while (
  firstTask.status !== "todo" &&
  firstTask.status !== "doing" &&
  firstTask.status !== "done"
) {
  firstTask.status = prompt("Enter a status for Task 1 (TODO, DOING or DONE):").toLowerCase();

  if (
    firstTask.status !== "todo" &&
    firstTask.status !== "doing" &&
    firstTask.status !== "done"
  ) {
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  }
}

console.log(firstTask);

// === Second Task === //
let secondTask = {
  title: prompt("Enter a title for Task 2:"),
  description: prompt("Enter a description for Task 2:"),
  status: ""
};

// Repeat until valid status // 
while (
  secondTask.status !== "todo" &&
  secondTask.status !== "doing" &&
  secondTask.status !== "done"
) {
  secondTask.status = prompt("Enter a status for Task 2 (TODO, DOING or DONE):").toLowerCase();

  if (
    secondTask.status !== "todo" &&
    secondTask.status !== "doing" &&
    secondTask.status !== "done"
  ) {
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  }
}

// Conditional message // 

if (task.status === "todo" || task.status === "doing") {
  console.log("No tasks completed, lets get to work!");
} 

console.log(secondTask);

// ==== End of Main Layout ==== // 