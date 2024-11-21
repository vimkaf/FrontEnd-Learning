const registrationForm = document.getElementById("register");
const loginForm = document.forms['login'];

const registrationInfo = {
    fullname : '',
    email : '',
    age : ''
};
console.log(registrationForm.gender.value);

registrationForm.registerButton.addEventListener("click", register);

// registrationForm.registerButton.onclick = register;

document.querySelectorAll("#register");


function register() {
    const errors = [];

    //validate the fullname
    if(registrationForm.fullname.value.length <= 0) {
        registrationForm.fullname.style.border = '1px solid red';
        document.getElementById("errormessage").innerText = 'fullname is required';
        // registrationForm.errormessage.innerText = 'asdasdas'
    }

    console.log(registrationInfo);
}


registrationForm.gender.addEventListener("change", function(){
    alert(registrationForm.gender.value);
})

registrationForm.email.addEventListener("load", function(event){
    console.log(event);
});

function load() {
    alert("body has loaded");
}


//keyup, keydown, keypress = keyup+keydown