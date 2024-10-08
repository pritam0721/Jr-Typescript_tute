const taskForm = document.querySelector<HTMLFormElement>('.form');
const fromInput = document.querySelector<HTMLInputElement>('.form-input');
const taskListElement = document.querySelector<HTMLUListElement>('.list');

type Task = {
  description: string;
  isCompleted: boolean;
};
function loadTasks() {
  const storedTask = localStorage.getItem('tasks');
  return storedTask ? JSON.parse(storedTask) : [];
}
const tasks: Task[] = loadTasks();
tasks.forEach(renderTask);

function addTask(arg: Task): void {
  tasks.push(arg);
}

function updateStorage() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTask(task: Task): void {
  const taskElement = document.createElement('li');
  taskElement.textContent = task.description;
  // adding check list
  const testCheckbox = document.createElement('input');
  testCheckbox.type = 'checkbox';
  testCheckbox.checked = task.isCompleted;
  testCheckbox.addEventListener('change', () => {
    task.isCompleted = !task.isCompleted;
    updateStorage();
  });
  taskElement.appendChild(testCheckbox);
  taskListElement?.appendChild(taskElement);
}

function createTask(event: SubmitEvent) {
  event.preventDefault();
  const taskDescription = fromInput?.value;

  if (taskDescription) {
    const newTask: Task = {
      description: taskDescription,
      isCompleted: false,
    };
    addTask(newTask);
    renderTask(newTask);
    updateStorage();
    fromInput.value = '';
    fromInput.autofocus = true;
    return;
  } else {
    alert('please provide the value before submitting');
  }
}

taskForm?.addEventListener('submit', createTask);
