      //    Per login mu hap per me dal tani te loja osht ky kod komplet    //
const credentials = {
    username: 'vlera',
    password: 'vlera123'
};

let loginPage = document.querySelector('#login-page');
let username = document.querySelector('#username');
let password = document.querySelector('#password');
let loginBtn = document.querySelector('#loginBtn');
let loginError = document.querySelector('#login-error');
let dashboardPage = document.querySelector('#dashboard-page');


loginBtn.addEventListener("click", () => {
    if(username.value == credentials.username && password.value == credentials.password){
        dashboardPage.style.display = 'block';
        loginPage.style.display = 'none';
}
else{
    loginError.innerHTML = "Invalid login"
}
});
               // // // // // // // // //

               



