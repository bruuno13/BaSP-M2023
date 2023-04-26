window.onload = function (){
     var emailLogin = document.getElementById("Email");
     var emailErrorMsg = document.getElementById("emailErrorMsg");
     var email = "example@email.com";
     var emailValid = isValidEmail(email);

    function isValidEmail(email) {
        var atIndex = email.indexOf('@');
        var dotIndex = email.lastIndexOf('.');
        if (atIndex < 1 || dotIndex < atIndex + 2 || dotIndex + 2 >= email.length) {
          return false;
        }
        if (email.slice(dotIndex + 1).length < 2) {
          return false;
        }
        return true;
      }
     emailLogin.addEventListener('blur', function () {
         var email = emailLogin.value;
         for (var i = 0; i < email.length; i++) {
         }
         if (email.length < 9) {
             emailErrorMsg.classList.remove("correct");
             emailErrorMsg.classList.add("error");
             emailErrorMsg.textContent = "email invalid";
         }
     });
     emailLogin.onfocus = function () {
         emailErrorMsg.classList.remove("error");
         emailErrorMsg.classList.add("correct");
     };

     // password
    var passwordLogin = document.getElementById("Password");
    var passwordErrorMsg = document.getElementById("passwordErrorMsg");
    passwordLogin.addEventListener('blur', function () {
    var password = passwordLogin.value;
    var hasBigLetter = false;
    var hasSmallLetter = false;
    var hasNumber = false;
    for (var i = 0; i < password.length; i++) {
            var char = password.charAt(i);
            if (char >= "0" && char <= "9") {
            hasNumber = true;
            } else if (char === char.toUpperCase()) {
                hasBigLetter = true;
            } else if (char === char.toLowerCase()) {
                hasSmallLetter = true;
            }
        }
        if (!hasBigLetter || !hasSmallLetter || !hasNumber) {
            passwordErrorMsg.classList.remove("correct");
            passwordErrorMsg.classList.add("error");
            passwordErrorMsg.textContent = "this field needs at least one capital letter, one small letter and one number.";
        }
        if (password.length < 5) {
            passwordErrorMsg.classList.remove("correct");
            passwordErrorMsg.classList.add("error");
            passwordErrorMsg.textContent = "this field needs at least 8 letters";
            }
     });
        passwordLogin.onfocus = function () {
        passwordErrorMsg.classList.remove("error");
        passwordErrorMsg.classList.add("correct");
    };


}
