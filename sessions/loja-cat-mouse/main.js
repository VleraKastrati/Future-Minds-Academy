const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext("2d");
const bgGame = new Image();
bgGame.src = "images/background.png";

bgGame.onload = function() {
    ctx.drawImage(bgGame, 0, 0);
}


const catImg = new Image();
catImg.src = "images/cat.png";
catImg.onload = function(){
ctx.drawImage(catImg, 0, 0);
}

let mouseObj = {};
mouseObj.width = 52;
mouseObj.height = 54;
mouseObj.x = Math.floor(Math.random()*512 - mouseObj.width);
mouseObj.y = Math.floor(Math.random()*480 - mouseObj.height);

const mouseImg = new Image();
mouseImg.src = "images/mouse.png";
mouseImg.onload = function(){
    if(mouseObj.x < 0){ctx.drawImage(mouseImg, 0, mouseObj.y);}
    else{ ctx.drawImage(mouseImg, mouseObj.x, mouseObj.y);}
}

if(mouseObj.y < 0) {ctx.drawImage(mouseImg, mouseObj.y);}
else{ ctx.drawImage(mouseImg, mouseObj.x, mouseObj.y);}

