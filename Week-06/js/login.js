var box = document.getElementById("box");
var EmailInput = document.getElementById("Email");
var PasswordInput = document.getElementById("Password");
var LoginButton = document.getElementById("login-button");


function validateEmail(x){
var Email = EmailInput.value;
    if (Email.indexOf('@') === -1 || Email.indexOf('-') === -1){
        EmailInput.style.border ='1px solid red';
        x.preventDefault();
        return false;
    }
    EmailInput.style.border ='2px solid green';
    return true;
}
function validatePassword (x) {
    var Password = PasswordInput.value;
    var Letter = false;
    var numbers = false;

    for (var i = 0; i < PasswordInput.length; i++) {
        if (isNaN (Password.charAt(i))) {
            Letter = true;
        } else {
            numbers = true;
        }

    }
    if(Password.length < 8 || !(Letter && numbers)){
        PasswordInput.style.border = "1px solid green";
        x.preventDefault();
        return false;
    }
    PasswordInput.style.border = "1px solid green";
    return true;
}

function validatebox (x) {
    var validEmail = validateEmail(x);
    var validPassword = validatePassword(x);

    if(!validEmail){
        alert("Invalid Email")
    }
    if(!validPassword){
        alert("Invalid password")
    }
    if(!validEmail && validPassword){
        alert("Email: " + EmailInput.value + "\n Password: " + PasswordInput.value );
    }
}

EmailInput.addEventListener("blur", validateEmail);
PasswordInput.addEventListener("blur",validatePassword);
LoginButton.addEventListener("blur", validatebox);
