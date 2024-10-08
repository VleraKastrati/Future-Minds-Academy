const username = "Lela";

const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += username === "" ? `Guest` : username;

document.title = 'My Website';
document.body.style.backgroundColor = "pink";
console.log(document);