const allgernes = document.querySelector('#allgernes');
const movieThumb = document.querySelector('#movieThumb');

for(let i=0; i<allMovies.length; i++){
allgernes.innerHtml = `<option value="${i}">${allMovies[i].gerne}</option>`;
}
function loadMovies(g){
console.log(g);
}
for(let i=0; i<8; i++){
movieThumb.innerHTML += `
<li>
<h4>${allMovies[g].movie[i].title}Title</h4>
 <img src="assets/img/ballerina.png" alt="" class="img-xl">
 <p>Authors</p>
 <p>desc</p>
<p>Length: 108min</p>
<p>Date: 10-20-2023</p> 
</li>
`;
}