const data = [];
let counter = 0;



// This function adds a task to the list
const addTask = () => {
  const a = document.getElementById("taskInput");
  const task = a.value.trim();// for delete any spaces
  if (task !== "") {
    data.push({
      id: counter,
      name: task,
      done: false
    });
    counter++;
    a.value = "";
    renderTasks();
  }
}

// This function renders the tasks in the list
// It creates a list item for each task and adds it to the unordered list
// It also adds a button to toggle the task's done status and a button to delete the task
const renderTasks = () => {
  const ul = document.getElementById("taskList");
  ul.innerHTML = "";
  for (let j = 0; j < data.length; j++) {
    if (typeof data[j] !== "undefined") {
      let li = document.createElement("li");
      li.innerHTML = data[j].name +
        " <button class=btn-fager style=color:#FFD700;  onclick='toggle(" + j + ")'>Toggle</button> " +
        " <button class=btn-fager  style=color:#A52A2A; onclick='deleteTask(" + j + ")'>Delete</button>";
      if (data[j].done === true) {
        li.style.textDecoration = "line-through";
      }
      ul.appendChild(li);
    }
  }
}


// This function toggles the status of a task
const toggle = (index) => {
  data[index].done = !data[index].done
  renderTasks();
}

// This function deletes a task from the list
function deleteTask(i) {
  data.splice(i, 1)
  renderTasks();
}


// Extra confusing logic
setInterval(() => {
  let allDone = true;
  for (let z = 0; z < data.length; z++) {
    if (data[z] && data[z].done === false) {
      allDone = false;
    }
  }
  if (allDone && data.length > 0) {
    console.log("All tasks done!");
  }
}, 10000);








// Rainfall Animation using HTML5 Canvas
const canvas = document.getElementById('rainfall');
const ctx = canvas.getContext('2d');

// Set canvas size to match window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create an array to store the raindrops
const raindrops = [];

// Function to create a new raindrop
function createRaindrop() {
  const x = Math.random() * canvas.width;
  const y = -5;
  const speed = Math.random() * 5 + 2;
  const length = Math.random() * 20 + 10;

  raindrops.push({ x, y, speed, length });
}

// Function to update the raindrops' positions
function updateRaindrops() {
  for (let i = 0; i < raindrops.length; i++) {
    const raindrop = raindrops[i];

    raindrop.y += raindrop.speed;

    if (raindrop.y > canvas.height) {
      raindrops.splice(i, 1);
      i--;
    }
  }
}

// Function to draw the raindrops
function drawRaindrops() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = 'white';
  ctx.lineWidth = 2;

  for (let i = 0; i < raindrops.length; i++) {
    const raindrop = raindrops[i];

    ctx.beginPath();
    ctx.moveTo(raindrop.x, raindrop.y);
    ctx.lineTo(raindrop.x, raindrop.y + raindrop.length);
    ctx.stroke();
  }
}

// Function to animate the raindrops
function animate() {
  createRaindrop();
  updateRaindrops();
  drawRaindrops();

  requestAnimationFrame(animate);
}

// Start the animation
animate();


