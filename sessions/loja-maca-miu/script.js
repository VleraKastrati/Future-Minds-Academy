const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const timerDV = document.querySelector("#timerDV");
const pointDV = document.querySelector("#pointDV");
const msg = document.querySelector("#msg");
const restartBTN = document.querySelector("#restartBTN");


let maca = {};
maca.width = 128;
maca.height = 128;
maca.color = "#ff0000";
maca.x = 200;
maca.y = 300;
maca.speed = 10;
let macaOn = false;

const myMaca = new Image();
myMaca.src = "cat.png";

myMaca.onload = function () {
    macaOn = true;
    
}

let points = 0;
let timer = 10;
let winningTotal = 3;
let freezeCat = false;

let miu = {};
miu.width = 48;
miu.height = 48;
miu.color = "#ff0000";
miu.x = 450;
// miu.x = Math.random()*canvas.width;
miu.y = Math.random()*canvas.height;
miu.speed = 10;
let miuOn = false;

const myMiu = new Image();
myMiu.src = "mousee.png";

myMiu.onload = function () {
    miuOn = true;
    
}

addEventListener("keydown", function (event) {
    if(!freezeCat) { // kto me if e bojm per mos me livrit maca masi t hargjohet timeri edhe e bojm te timeri posht true
    if (event.key == "ArrowRight") {maca.x += maca.speed;}

    if (event.key == "ArrowLeft") {maca.x -= maca.speed; }

    if (event.key == "ArrowUp") { maca.y -= maca.speed; }

    if (event.key == "ArrowDown") { maca.y += maca.speed; }
    }
});

function render(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
if(macaOn) { ctx.drawImage(myMaca, maca.x, maca.y); }
if(miuOn) { ctx.drawImage(myMiu, miu.x, miu.y); }

if(maca.x > 770){ maca.x = -60; } //djatht
if (maca.x < -60){ maca.x=750; } //majt
if(maca.y > 500) { maca.y = -60; } //nese mrrin posht del nalt
if (maca.y < -60){ maca.y=450; } //prej nalt del posht

if(
maca.x + 105 > miu.x && maca.y < miu.y + 45 //45 osht px madhesia e miut
&& maca.x < miu.x + 20 && maca.y > miu.y - 120 //4 qoshet ku e prek maca miun i shton poenat
){
    miu.x = Math.random()*755; //800 osht widthi i canvasit i kemi zbrit -45
    miu.y = Math.random()*400; //edhe kjo njejt 500 - 45 amo 400 tamon del
points++;
}

pointDV.textContent = "Points: " + points;
}
timerDV.textContent = "Timer "+ timer;


function countDown(){
    if(timer != 0) { timer--; }  
   timerDV.textContent = "Timer "+ timer;
   //if(timer == 0) {msg.textContent = "YOU LOST"; }
   
  

if(timer == 0){
    freezeCat = true; //ktu e bojm true 
    if(points >= winningTotal){
        msg.textContent = "YOU WON" ; }
        else { msg.textContent = "YOU LOST" } //kjo kur fiton ose hup
        
        restartBTN.style.visibility = 'visible';
    }
}

restartBTN.addEventListener('click', function(){
    window.location.reload();
});
   
   

setInterval(render, 1);
setInterval(countDown, 1000);
