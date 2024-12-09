const credentials = {
    username: "admin",
    password: "admin123"
};

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
]

let isAddingNewGame = false;
let currentGameIndex = null;


const loginPage = document.querySelector('#login-page');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const loginBtn = document.querySelector('#loginBtn');
const loginError = document.querySelector('#login-error');
const dashboardPage = document.querySelector('#dashboard-page');

const addNewGameBtn = document.querySelector('#add-new-game-btn');
const gameList = document.querySelector('#game-list');

const editModal = document.querySelector('#edit-modal');
const closeEditModal = document.querySelector('#close-edit-modal');
const modalTitle = document.querySelector('#modal-title');
const editName = document.querySelector('#edit-name');
const editThumbnail = document.querySelector('#edit-thumbnail');
const editUrl = document.querySelector('#edit-url');
const editLikes = document.querySelector('#edit-likes');
const editViews = document.querySelector('#edit-views');
const saveChanges = document.querySelector('#saveChanges');

const removeModal = document.querySelector('#remove-modal');
const closeRemoveModal = document.querySelector('#close-remove-modal');
const confirmRemove = document.querySelector('#confirm-remove');
const cancelRemove = document.querySelector('#cancel-remove');

LoadGames();

loginBtn.addEventListener('click', () =>{
    if(username.value == credentials.username && password.value == credentials.password){
        loginPage.style.display = 'none';
        dashboardPage.style.display = 'block';
    }
    else{
        loginError.textContent = "Invalid Login";
    }
});

function LoadGames(){
gameList.innerHTML = '';
for(let i=0; i < games.length; i++){
    gameList.innerHTML += `
    <tr>
<td>${games[i].name}</td>
<td><img src="${games[i].thumbnail}"</td>
<td><a href="${games[i].url}">gameurl</a></td>
<td>${games[i].likes}</td>
<td>${games[i].views}</td>
<td><button class="edit" onclick="OpenEditModal(${i})">Edit</button></td>
<td><button class="remove" onclick="OpenRemoveModal(${i})">remove</button></td>
</tr>
    `
}
};

function OpenEditModal(index = null){
    currentGameIndex = index;
    if(index === null){
        isAddingNewGame = true;
        modalTitle.textContent = "Add New Game";
        editName.value = '';
        editThumbnail.value = 'images/cgfc.avif';
        editUrl.value = '';
        editLikes.value = '';
        editViews.value = '';
    }
    else{
        isAddingNewGame = false;
        modalTitle.textContent = "Edit Game";
        
        const game = games[index];
        editName.value = game.name;
        editThumbnail.value = game.thumbnail;
        editUrl.value = game.url;
        editLikes.value = parseInt(game.likes);
        editViews.value = parseInt(game.views);
    }
    editModal.style.display = 'block';
    LoadGames();
};

closeEditModal.addEventListener('click', () =>{
    editModal.style.display = 'none';
});

saveChanges.addEventListener('click', (event) =>{
    editModal.style.display = 'none';
const newGame = {
    name: editName.value,
    thumbnail: editThumbnail.value,
    url: editUrl.value,
    likes: editLikes.value,
    views: editViews.value
}
if(isAddingNewGame){
    games.push(newGame);
}
else{
    games[currentGameIndex] = newGame;
}
LoadGames();
});

addNewGameBtn.addEventListener('click', () =>{
    OpenEditModal(index = null)
});

function OpenRemoveModal(index = null){
    currentGameIndex = index;
    removeModal.style.display = 'block';
    confirmRemove.addEventListener('click', () =>{
        games.splice(currentGameIndex, 1);
        LoadGames();
        removeModal.style.display = 'none';
    });
    cancelRemove.addEventListener('click', () =>{
        removeModal.style.display = 'none';
    });
};


