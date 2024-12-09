let allData = [
    {
        year: "2024",
        name: "Inside Out 2",
        thumb: "photoo.webp",
        reviews: "104"
    },
    {
        year: "2023",
        name: "The Taste of Things",
        thumb: "theTaste.jpg",
        reviews: "303"
    }
];

const addBTN = document.querySelector('#addBTN');
const allMovies = document.querySelector('#allMovies');
const movieModal = document.querySelector('#movieModal');
const modalTitle = document.querySelector('#modalTitle');
const year = document.querySelector('#year');
const movieTitle = document.querySelector('#movieTitle');
const thumb = document.querySelector('#thumb');
const reviews = document.querySelector('#reviews');
const cancelBtn = document.querySelector('#cancelBtn');
const submitBtn = document.querySelector('#submitBtn');
const editName = document.querySelector('#editName');
const editYear = document.querySelector('#editYear');
const editThumb = document.querySelector('#editThumb');
const editReviews = document.querySelector('#editReviews');



let editAction = false;
let currentMovie = 0;

LoadMovies();

function LoadMovies(){
allMovies.innerHTML = '';
for(let i=0; i < allData.length; i++){
    allMovies.innerHTML += `
    <tr>
    <td>${allData[i].year}</td> 
                <td>${allData[i].name}</td>
                <td><img width="50" src="${allData[i].thumb}" alt=""></td>
                <td>${allData[i].reviews}</td>
                <td>
                    <button onclick="editMovie(${i})">Edit</button> 
                    <button onclick="removeMovie(${i})">Remove</button>
                </td>
                </tr>
    `
}
}

function editModal(index = 0){
currentMovie = index;
if(index === 0){
    editAction = true;

    modalTitle.textContent = 'Add New Game';
    editYear.value = '';
    editName.value = '';
    editThumb.value = 'photoo.webp';
    editReviews.value = '';
}
else{
    editAction = false;
    modalTitle.textContent = 'Edit Game';
    
    const movie = allData[index];
    editYear.value = movie.year;
    editName.value = movie.name;
    editThumb.value = movie.thumb;
    editReviews.value = movie.reviews;
}
movieModal.style.display = 'block';
}
function removeMovie(n){
    allData.splice(n , 1);
    LoadMovies();
     }
  