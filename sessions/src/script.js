const text = document.querySelector('#text');
const pass = document.querySelector('#pass');
const login = document.querySelector('#login');

let username = 'fma';
let password = 'fma#2024';

login.addEventListener('click', function() {
    if( text.value == username && pass.value == password){
      alert('Correct');
    }
    else {
      alert('Incorrect');
    }
   });