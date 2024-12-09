// Sample admin credentials
const credentials = {
    username: 'admin',
    password: 'admin123'
};

// Sample game data
let games = [
    {
        name: 'CG FC 24',
        thumbnail: 'images/cgfc.avif',
        url: 'https://www.crazygames.com/game/cg-fc-24',
        likes: 150,
        views: 2000
    },
    {
        name: 'Supermarket sort',
        thumbnail: 'images/supermarket.avif',
        url: 'https://www.crazygames.com/game/supermarket-sort-grocery-game',
        likes: 250,
        views: 5000
    },
    {
        name: 'Gun Strike Runner',
        thumbnail: 'images/gun-strike-runner.avif',
        url: 'https://www.crazygames.com/game/gun-strike-runner',
        likes: 188,
        views: 4800
    }
];

let isAddingNewGame = false; // This flag will tell us whether we are adding or editing a game
let currentGameIndex = null; // Holds the index of the game being edited

//Add your code below
let loginBtn = document.querySelector("#loginBtn");
let dashboardPage = document.querySelector("#dashboard-page");
let loginError = document.querySelector("#login-error")
let username = document.getElementById("username");
let password = document.getElementById("password");
let loginPage = document.getElementById("login-page")

let addNewGameBtn = document.getElementById("add-new-game-btn")
let gameList = document.getElementById("game-list");

let editModal = document.getElementById("edit-modal");
let editName = document.getElementById("edit-name")
let modalTitle = document.getElementById("modal-title")

let editThumbnail = document.getElementById("edit-thumbnail");
let editUrl = document.getElementById("edit-url");
let editLikes = document.getElementById("edit-likes");
let editViews = document.getElementById("edit-views");
let saveChanges = document.getElementById("saveChanges");

let removeModal = document.getElementById("remove-modal")
let confirmRemove = document.getElementById("confirm-remove");
let cancelRemove = document.getElementById("cancel-remove");




loginBtn.addEventListener("click", () => {
    if (username.value == credentials.username && password.value == credentials.password) {
        dashboardPage.style.display = "block";
        loginPage.style.display = "none"
    }
    else {
        loginError.innerHTML = "invalid login"
    }
})

renderList();
function renderList() {
    gameList.innerHTML = "";
    games.forEach((game, index) => {
        gameList.innerHTML +=
            `  <tr>
<td>${game.name}</td>
<td><img src="${game.thumbnail}"</td>
<td><a href="${game.url}">gameurl</a></td>
<td>${game.likes}</td>
<td>${game.views}</td>
<td><button class="edit" onclick="openEditModal(${index})">Edit</button></td>
<td><button class="remove" onclick="openRemoveModal(${index})">remove</button></td>
</tr>`
    })

}
function openEditModal(index = null) {
    currentGameIndex = index;
    if (index === null) {
        isAddingNewGame = true;
        modalTitle.textContent = "add new game"
        editName.value = ""
        editThumbnail.value = "images/cgfc.avif";
        editUrl.value = "";
        editLikes.value = "";
        editViews.value = "";

    }
    else {
        console.log(currentGameIndex);
        isAddingNewGame = false;
        modalTitle.textContent = "edit game"
        const game = games[index];
        editName.value = game.name
        editThumbnail.value = game.thumbnail;
        editUrl.value = game.url;
        editLikes.value = game.likes;
        editViews.value = game.views;
    }
    editModal.style.display = "block";

}
saveChanges.addEventListener("click", () => {

    let newGame = {
        name: editName.value,
        thumbnail: editThumbnail.value,
        url: editUrl.value,
        likes: parseInt(editLikes.value),
        views: parseInt(editViews.value)
    }
    if (isAddingNewGame) {
        games.push(newGame);
    }
    else {
        games[currentGameIndex] = newGame
    }
    renderList()
    editModal.style.display = "none"
})
addNewGameBtn.addEventListener("click", () => {
    openEditModal(index = null)
})
function openRemoveModal(index) {
    currentGameIndex = index;
    removeModal.style.display = "block"
    confirmRemove.addEventListener("click", () => {
        games.splice(currentGameIndex, 1);
        renderList();
        removeModal.style.display = "none"
    });
    cancelRemove.addEventListener("click", () => {
        removeModal.style.display = "none"
    })
}