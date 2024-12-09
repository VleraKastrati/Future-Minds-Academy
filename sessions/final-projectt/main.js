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




const allMovies = document.querySelector('#allMovies');
const addBTN = document.querySelector('#addBTN');
const movieModal = document.querySelector('.movieModal');
const modalTitle = document.querySelector('#modalTitle');
const movieTitle = document.querySelector('#movieTitle');
const thumb = document.querySelector("#thumb");
const reviews = document.querySelector("#reviews");
const year = document.querySelector("#year");
const cancelBTN = document.querySelector('#cancelBTN');
const submitBTN = document.querySelector('#submitBTN');


let editAction = false;
let currentMovie = 0;

listTable();

function listTable() {
    let recordsHTML = '';
    for (let i = 0; i < allData.length; i++) {
        recordsHTML += "<tr>";
        recordsHTML += `
        <td>${allData[i].year}</td>
                <td>${allData[i].name}</td>
                <td><img width="50" src="${allData[i].thumb}" alt=""></td>
                <td>${allData[i].reviews}</td>
                <td>
                    <button onclick="editMovie(${i})">Edit</button> 
                    <button onclick="removeMovie(${i})">Remove</button>
                </td>
        `;
        recordsHTML += "</tr>";
    }

    allMovies.innerHTML = recordsHTML;
};


addBTN.addEventListener('click', () => {
    movieModal.style.display = "block";


});

cancelBTN.addEventListener('click', removeModal);
submitBTN.addEventListener('click', submitForm);

function submitForm() {
    modalTitle.textContent = 'Add Movie';

    if (!editAction) {
        let ojbMovie = {};
        ojbMovie.year = year.value;
        ojbMovie.name = movieTitle.value; 
        ojbMovie.thumb = thumb.value;
        ojbMovie.reviews = reviews.value;

        allData.push(ojbMovie);
    } else {
        let editActionItem = {};
        editActionItem.year = year.value;
        editActionItem.name = movieTitle.value;
        editActionItem.thumb = thumb.value;
        editActionItem.reviews = reviews.value;

        allData[currentMovie] = editActionItem;
        editAction = false;
    }

    removeModal();
    listTable();
};

function removeModal() {
    year.value = '';
    movieTitle.value = ''; 
    reviews.value = '';
    editAction = false;

    modalTitle.textContent = 'Add Movie'; 
    movieModal.style.display = 'none';
};

function editMovie(m) {
    currentMovie = m;
    editAction = true;

    year.value = allData[currentMovie].year;
    movieTitle.value = allData[currentMovie].name; 
    reviews.value = allData[currentMovie].reviews;

    modalTitle.textContent = 'Edit Movie'; 
    movieModal.style.display = 'block';
};

function removeMovie(m) {
    allData.splice(m, 1);

    listTable();
}