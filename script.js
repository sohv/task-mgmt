// Get references to HTML elements
const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

// Event listener for task form submission
taskForm.addEventListener('submit', function (event) {
   event.preventDefault();

   // Get form values
   const title = document.getElementById('title').value;
   const description = document.getElementById('description').value;
   const dueDate = document.getElementById('due-date').value;
   const priority = document.getElementById('priority').value;
   const status = document.getElementById('status').value;

   // Create task object
   const task = {
      title: title,
      description: description,
      dueDate: dueDate,
      priority: priority,
      status: status
   };

   // Call a function to add task to the list
   addTaskToList(task);

   // Reset form fields
   taskForm.reset();
});

// Function to add task to the list
function addTaskToList(task) {
   const listItem = document.createElement('li');
   listItem.innerHTML = `
    <h3>${task.title}</h3>
    <p>${task.description}</p>
    <p>Due Date: ${task.dueDate}</p>
    <p>Priority: ${task.priority}</p>
    <p>Status: ${task.status}</p>
  `;
   taskList.appendChild(listItem);
}
