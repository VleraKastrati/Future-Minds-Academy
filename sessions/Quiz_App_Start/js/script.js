// opacity 0 e kemi hek pi css e kemi bo display none

const start_btn = document.querySelector('.start_btn');
const info_box = document.querySelector('.info_box');
const exit_quiz = document.querySelector('.exit_quiz');
const continue_btn = document.querySelector('#continue_btn');
const quiz_box = document.querySelector('.quiz_box');
const que_text = document.querySelector('.que_text');
const option_list = document.querySelector('.option_list');
const next_btn = document.querySelector('.next_btn');
const timer_sec = document.querySelector('.timer_sec');
const time_line = document.querySelector('.time_line');
const total_que = document.querySelector('.total_que');

let currentQuestion = 0; //pytja aktuale
let timeTick = 10; // kjo paraqet timeri qe osht 10
let timerLineA = 0; //gjonsia e vijes se kalter qe ja rritmi me width
let timerLineAnime; //kjo osht null ska kurgjo te deklarume mrena
let ticker; //kjo osht null ska kurgjo te deklarume mrena

start_btn.addEventListener('click', function(){
    info_box.classList.add('activeInfo');
});

exit_quiz.addEventListener('click', function(){
    info_box.classList.remove('activeInfo');
});

continue_btn.addEventListener('click', function(){
    info_box.classList.remove('activeInfo');
    quiz_box.classList.add('activeQuiz');
    loadQuestion(currentQuestion); // kjo osht mi perpunu kto t 4 mi qit aty pytjet
}); 

function loadQuestion(q){ //kjo lidhet me currentquestion++, q osht me dit ne cilen pytje je //
    reset();
    que_text.textContent = questions[q].question; //kjo e lexon kto te array per pytjen e par ,kjo e shkrun pytjet aty what html stand for etc//
    option_list.innerHTML = ''; //e zbrazmi listen e opsioneve, per mos mu shtu opsionet te pares
    for(let i=0; i<questions[q].options.length; i++){
       option_list.innerHTML += `
        <div class="option" onclick="optionClicked()">
            <span>${questions[q].options[i]}</span>
        </div>
        `;
    } // ktu te cila pytje je edhe i shton opsionet
    next_btn.style.display = "none"; //kjo e hek buttonin
    if(currentQuestion != questions.length-1){
        currentQuestion++; //kjo ja shton ka njo
    }
    
    total_que.textContent = currentQuestion + " / " + questions.length + " questions"; //kjo osht mi bo 1 prej 6 questions aty posht
}

next_btn.addEventListener('click', function(){
    loadQuestion(currentQuestion); // kjo e shton ka 1 pytje mashum duhet me bo empty
})

function optionClicked(){
    next_btn.style.display = "inline";
    clearInterval(ticker); //kur klikon mu nal timeri
    clearInterval(timerLineAnime); //kjo i nal edhe vijen edhe timerin 
    disableOptions(); //e kemi thirr ket opsion edhe e perdormi kudo pa pas nevoj sdisa her me shkru disable
}

function timer(){
    timer_sec.textContent = timeTick;
    if( timeTick !=0 ){  // kjo thot hekja ka njo deri tmrrin ne 0
        timeTick--; // kjo se len maposht se 0 me shku, kjo ja nis numrimit prej 5 4 3 2 1 -1../
    }
    else { 
        disableOptions(); //edhe ktu e kemi thirr
        next_btn.style.display = "inline";
    }
}

function timerLineFill(){
    time_line.style.width = timerLineA+'px';
    if(timerLineA <= 548){
        timerLineA +=5.3; //kjo per sa e mrrin vija deri ne fund me sekonda
    }
}

function reset(){
    timer_sec.textContent = "10";
    timeTick = 9;
    timerLineA = 0;
    timerLineAnime = setInterval(timerLineFill, 100);
    ticker = setInterval(timer, 1000);
}
    
function disableOptions(){ //ky funksioni qe e kemi deklaru
    // aftr Timer is 0 disable clicking
    option_list.innerHTML = '';
    for(let i=0; i<questions[currentQuestion-1].options.length; i++){
        option_list.innerHTML += `
        <div class="option disabled">
            <span>${questions[currentQuestion-1].options[i]}</span>
        </div>
        `;
    } // kjo for loop i hin krejtav edhe e bon disable qe masi t kryhet timeri mos me mujt me kliku
}