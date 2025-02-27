      //    Per login mu hap per me dal tani te loja osht ky kod komplet    //
const credentials = {
    username: 'vlera',
    password: 'vlera123'
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
const editName = document.querySelector('#edit-name');
const editThumbnail = document.querySelector('#edit-thumbnail');
const editUrl = document.querySelector('#edit-url');
const editLikes = document.querySelector('#edit-likes');
const editViews = document.querySelector('#edit-views');
const saveChanges = document.querySelector('#saveChanges'); 

const GameName = document.querySelector('#GameName');
const GameUrl = document.querySelector('#GameUrl');
const GameLikes = document.querySelector('#GameLikes');
const GameViews = document.querySelector('#GameViews');
const modalTitle = document.querySelector('#modal-title');


const removeModal = document.querySelector('#remove-modal');
const closeRemoveModal = document.querySelector('#close-removeModal');
const confirmRemove = document.querySelector('#confirm-remove');
const cancelRemove = document.querySelector('#cancel-remove');


LoadGames();

loginBtn.addEventListener("click", () => {
    if(username.value == credentials.username && password.value == credentials.password){
        dashboardPage.style.display = 'block';
        loginPage.style.display = 'none';
}
else{
    loginError.innerHTML = "Invalid login"
}
});
               // // // // // // // // //

 function LoadGames(){
    gameList.innerHTML = '';
    for(let i=0; i < games.length; i++){
        gameList.innerHTML += `
          <tr>
    <td id="GameName">${games[i].name}</td> 
    <td><img src="${games[i].thumbnail}" alt=""></td>
    <td id="GameUrl"><a href="${games[i].url}" target="_blank">Play Game</a></td>
    <td id="GameLikes">${games[i].likes}</td>
    <td id="GameViews">${games[i].views}</td>
    <td><button class="edit" onclick="OpenEditModal(${i})" >Edit</button></td>
    <td><button class="remove" onclick="OpenRemoveModal(${i})">Remove</button></td>
    </tr>
    `
    } //kto duhet krejt mi mar me const nalt se ndryshe sbojn psh GameName, GameUrl ... krejta //
 } //kjo i qet kto te name posht emrat linket krejt po veq linkun mundemi me prek osht funksional me ket kod//      

function OpenEditModal(index = null){
currentGameIndex = index;
if(index === null){
    isAddingNewGame = true;
    modalTitle.textContent = 'Add New Game'; //modalTitle e marmi me const nalt se ndryshe sbon//
    editName.value = '';
    editThumbnail.value = 'images/cgfc.avif';
    editUrl.value = '';
    editLikes.value = '';
    editViews.value = '';
}
else{
    isAddingNewGame = false;
    modalTitle.textContent = 'Edit Game';
    const game = games[index];
    editName.value = game.name;
    editThumbnail.value = game.thumbnail;
    editUrl.value = game.url;
    editLikes.value = game.likes;
    editViews.value = game.views;
}
editModal.style.display = 'block';
} //Kjo e shfaq Editin me opsionet qe i ka mrena//

function OpenRemoveModal(n){
games.splice(n, 1);
LoadGames()
} //Kjo e hek te fundit//


saveChanges.addEventListener('click', (event) => {
    event.preventDefault();

    const newGame = {
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
        games[currentGameIndex] = newGame;
    }

    editModal.style.display = 'none';
    LoadGames();
}) //kjo per mi rujt ndryshimet//


closeEditModal.addEventListener('click', () => {
    editModal.style.display = 'none'
}) //kjo per me mshel editin te x//


addNewGameBtn.addEventListener('click', () =>{
    editModal.style.display = 'block';
    const newGame = {
        name: editName.value,
        thumbnail: editThumbnail.value,
        url: editUrl.value,
        likes: parseInt(editLikes.value),
        views: parseInt(editViews.value)
    }
    games.push(newGame);
    LoadGames();
}) //per me prek butonin Add New Game edhe me na shfaq opsionet mrena//

cancelRemove.addEventListener('click', () =>{
    removeModal.style.display = 'none';
}) //kjo per me mshel te remove//