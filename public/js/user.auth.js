console.log("login page");


let btn = document.querySelector("#login-form__btn");
btn.addEventListener("click", function () {
    let email = document.querySelector("#username").value;
    let pwd = document.querySelector("#password").value;
    console.log(email, pwd);
});