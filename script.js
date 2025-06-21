
// ===  Main Layout === // 


let task1 = {  // Declared my Variable using let // 
  title: prompt("Enter a title for Task 1:"),  // Created an array to define multiple prompts // 
  description: prompt("Enter a description for Task 1:"),
  status: prompt("Enter a status for Task 1 TODO, DOING or DONE:").toLowerCase() // All letter cases will be automatically changed to lower case // 
                                                                                    
};
if (task1.status !== "todo" && task1.status !== "doing" && task1.status !== "done"){ // This is an If statement and logical Operators // 
  alert("Invalid Status. Please enter 'todo' 'doing' or 'done'"); // This an alert to notify that the incorrect status has been inserted // 
} 

console.log(task1); // This is the console log // 

let task2 = {
  title: prompt("Enter a title for Task 2:"),
  description: prompt("Enter a description for Task 2:"),
  status: prompt("Enter a status for Task 2 TODO, DOING or DONE:").toLowerCase()
};
if (task2.status !== "todo" && task2.status !== "doing" && task2.status !== "done") {
  alert("Invalid Status. Please enter 'todo' 'doing' or 'done'");
}

console.log(task2);

// ==== End of Main Layout ==== // 