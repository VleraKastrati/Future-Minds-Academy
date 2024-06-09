let heading = document.querySelector (".text-center");
let figure = document.querySelector (".figure");



function loadPage(seasons) {


    if(seasons == 'spring'){
       heading.innerHTML = "Welcome to spring";
        figure.src = 'assets/images/spring.png';
    }

    if(seasons == 'summer'){
        heading.innerHTML = "Welcome to summer";
         figure.src = 'assets/images/summer.png';
     }

     if(seasons == 'fall'){
        heading.innerHTML = "Welcome to fall";
         figure.src = 'assets/images/fall.png';
     }

     if(seasons == 'winter'){
        heading.innerHTML = "Welcome to winter";
         figure.src = 'assets/images/winter.png';
     }

     if (seasons == 'allSeasons') {
     heading.textContent = "All Seasons"
     heading.innerHTML += 'assets/images/spring.png';
     heading.innerHTML += 'assets/images/summer.png';
     heading.innerHTML += 'assets/images/fall.png';
     heading.innerHTML += 'assets/images/winter.png';
     
     }
    }

   


