const email = document.querySelector('#email');
const pass = document.querySelector('#pass');
const loginBTN = document.querySelector('#loginBTN');
const msg = document.querySelector('#msg');


let emailUser = 'info@futureminds.io';
let paddUser = 'Fma#2024';


loginBTN.addEventListener('click', function() {
  console.log(email.value) //kjo osht qka te shkrujm ne email del ne console, e njejta edhe per password bohet
})


loginBTN.addEventListener('click', function() {
 if( email.value == emailUser && pass.value == paddUser){
   msg.innerHTML = `<span style="color: green">Correct</span>`;
 }
 else {
    msg.innerHTML = `<span style="color: red">Incorrect</span>`;
 }
}); //ky eshte kodi per met dal correct ose incorrect per me qel imellen edhe passin me na bo







