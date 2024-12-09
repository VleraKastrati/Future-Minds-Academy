const movieGernes = document.querySelector('.movieGernes');
const movielist = document.querySelector('.movielist')
for(let i=0; i < allMovies.length; i++){
    movieGernes.innerHTML +=`
    <option value="0">${allMovies[i].gerne}Actions</option>
    `
}
function loadMovies(g) {
    movielist.innerHTML ='';
    for (let i=0; i<allMovies(g).movies.length; i++){
        movielist.innerHTML +=`
        <li>
    <h4>${moviesGerne[g].movies[i].title}</h4>
     <img src="assets/img/${moviesGerne[g].movies[i].thumb}" alt="Kill Boksoon">
     <p class="description">${moviesGerne[g].movies[i].desc}</p>
     <div class="row movie-stats m0 p0">
     <div class="col m0 p0">Date: <span>${moviesGerne[g].movies[i].date}</span></div>
     <div class="col m0 p0">Length: <span>${moviesGerne[g].movies[i].length}</span> </div>
 </div>
</li>
`
}}
loadMovies(g);
    

 




