const start_btn = document.querySelector('.start_btn');
const info_box  = document.querySelector('.info_box');
const exit_quiz = document.querySelector('.exit_quiz');
const continue_btn = document.querySelector('#continue_btn');
const quiz_box = document.querySelector('.quiz_box');
const timer_sec = document.querySelector('.timer_sec');
const que_text = document.querySelector('.que_text');
const option_list = document.querySelector('.option_list');
const total_que = document.querySelector('.total_que');

let timer = 15;

start_btn.addEventListener('click', function(){
    info_box.classList.add('activeInfo');
});

exit_quiz.addEventListener('click', function(){
    info_box.classList.remove('activeInfo');
});

continue_btn.addEventListener('click', function(){
    info_box.classList.remove('activeInfo');
    quiz_box.classList.add('activeQuiz');
    startQuiz();
    loadQuestions(0);
}); 

function startQuiz() {
setInterval(()=> {
    timer_sec.textContent = timer;
if(timer > 0){timer--} 
else { clearInterval(timeCount); }
}, 1000);
}

function loadQuestions(q){
    let alloptions = questions[q].options;

que_text.textContent = questions[q].question;
for(let i=0; i<alloptions.length; i++){
option_list.innerHTML +=`
<div class="option">
<span>${allOptions[i]}</span>
</div>
`
}

total_que.textContent = questions[q].numb + '/' + questions.length + ' questions '
}