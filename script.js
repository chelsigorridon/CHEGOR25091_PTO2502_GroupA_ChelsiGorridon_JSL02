
// ===  Main Layout === // 


let firstTask = {  // Declared my Variable using let // 
  title: prompt("Enter a title for Task 1:"),  // Created an array to define multiple prompts // 
  description: prompt("Enter a description for Task 1:"),
  status: ""  // Leave status open as its subject to change // 
};


while (   // Loop until valid status // 
  firstTask.status !== "todo" &&    // ! Means NOT - && means this AND that // 
  firstTask.status !== "doing" &&
  firstTask.status !== "done"
) {
  firstTask.status = prompt("Enter a status for Task 1 (TODO, DOING or DONE):").toLowerCase(); // Automatically changes letters to lower case // 

  if (  // An If statement an logical operators // 
    firstTask.status !== "todo" &&
    firstTask.status !== "doing" &&
    firstTask.status !== "done"
  ) {
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'."); // This an alert to notify that the incorrect status has been inserted // 
  }
}

// Conditional message // 

if ( // If status is TODO or DOING a motivational message will pop up in console log // 
(firstTask.status === "todo" || firstTask.status === "doing") 
) 
    {
  console.log("No tasks completed, lets get to work!");
} 

console.log(firstTask); // This is the console log //


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

if (
(secondTask.status === "todo" || secondTask.status === "doing")
) 
    {
  console.log("No tasks completed, lets get to work!");
} 

console.log(secondTask);

// ==== End of Main Layout ==== // 