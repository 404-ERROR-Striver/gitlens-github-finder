let xp = 0;
let level = 1;

function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value;

  if (taskText === "") return;

  let li = document.createElement("li");
  li.innerHTML = `${taskText} <button onclick="completeTask(this)">Done</button>`;

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

function completeTask(button) {
  let li = button.parentElement;
  li.classList.add("completed");

  xp += 10;
  checkLevelUp();
  updateUI();
}

function checkLevelUp() {
  if (xp >= level * 50) {
    level++;
    changeAvatar();
  }
}

function updateUI() {
  document.getElementById("xp").innerText = "XP: " + xp;
  document.getElementById("level").innerText = "Level: " + level;
}

function changeAvatar() {
  let avatar = document.getElementById("avatar");

  if (level == 2)
    avatar.src = "https://i.imgur.com/QZ6Pf6G.png";
  else if (level == 3)
    avatar.src = "https://i.imgur.com/8Km9tLL.png";
  else if (level >= 4)
    avatar.src = "https://i.imgur.com/3ZQ3Z9K.png";
}

function generateAvatar() {
  let name = document.getElementById("avatarName").value;

  if (name === "") return;

  let url = `https://api.dicebear.com/7.x/adventurer/svg?seed=${name}`;
  document.getElementById("avatar").src = url;
}