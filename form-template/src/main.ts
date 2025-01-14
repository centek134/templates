const registerForm = document.getElementById("register-form") as HTMLFormElement;
const pwLoginIcon = document.getElementById("eye-login") as HTMLSpanElement;
const pwRegisterIcon = document.getElementById("eye-register") as HTMLSpanElement;
const pwLogin = document.getElementById("password-login") as HTMLInputElement;
const pwRegister = document.querySelectorAll(".password-register") as NodeListOf<HTMLInputElement>;
const password = document.getElementById("password") as HTMLInputElement;
const passwordRepeated = document.getElementById("repeated-password") as HTMLInputElement;

const memberRegister = document.getElementById("member-register") as HTMLAnchorElement;
const memberLogin = document.getElementById("member-login") as HTMLAnchorElement;

const errorMessage = document.querySelector(".error-message") as HTMLParagraphElement;
// Login form, show and hide password, change icon
pwLoginIcon.addEventListener("click", () =>{
    pwLoginIcon.classList.toggle("--visible");
    pwLogin.type === "password" ? pwLogin.type = "text" : pwLogin.type = "password";
});

// Register form, show and hide password, change icon
pwRegisterIcon.addEventListener("click", () =>{
    pwRegisterIcon.classList.toggle("--visible");
    pwRegister.forEach( inputField => {
        inputField.type === "password" ? inputField.type = "text" : inputField.type = "password";
    });
});

// "register now, login now buttons functionality"
memberRegister.addEventListener("click", () => {
    document.querySelector(".form.login")!.classList.add("--hidden")
});
memberLogin.addEventListener("click", () => {
    document.querySelector(".form.login")!.classList.remove("--hidden")
})

//Register Form Validation

registerForm.addEventListener("submit", e => {
    e.preventDefault();
    if(password.value != passwordRepeated.value){
        pwRegister.forEach(input => input.classList.add("--invalid"));
        errorMessage.innerHTML = "Passwords do not match!";
        return;
    }
    else{
        pwRegister.forEach(input => input.classList.remove("--invalid"));
        errorMessage.innerHTML = "";
        const formData = new FormData(registerForm);
        const data = Object.fromEntries(formData);
        
        fetch("https://reqres.in/api/users", {
            method: "POST",
            headers: {
                "Content-type":"application/json"
            },
            body: JSON.stringify(data)
        })
    };

})
