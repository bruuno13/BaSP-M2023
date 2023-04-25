window.onload = function (){
    // email
    var emailLogin = document.getElementById("Email");
    var emailErrorMsg = document.getElementById("emailErrorMsg");
    var email = "example@email.com";
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var emailValid = false
     if (email.match(emailExpression)) {
         emailValid = true;
     } else {
         emailValid = false;
     }
     emailLogin.addEventListener('blur', function () {
         var email = emailLogin.value;
         for (var i = 0; i < email.length; i++) {
         }
         if (email.length < 9) {
             emailErrorMsg.classList.remove("correct");
             emailErrorMsg.classList.add("error");
             emailErrorMsg.textContent = "Email invalid";
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

    //ID
    var Idinput = document.getElementById("Id");
    var Idmsg = document.getElementById("idmsg");
    var IdType = "0123456789";
    var IdExpression = /^\d+$/;
    var Idvalid = false

    if (IdType.match(IdExpression)){
        Idvalid = true;
    }else {
        Idvalid = false;
    }

    Idinput.addEventListener('blur', function () {
        var number = Idinput.value;
        for (var i = 0; i < email.length; i++ ){
        }

        if (number.length < 7 ){
            Idmsg.classList.remove ("error");
            Idmsg.classList.add("correct");
            Idmsg.textContent = "id invalid";
        }
    });

    Idinput.onfocus = function () {
        Idmsg.classList.remove ("error");
        Idmsg.classList.add("correct");
    };

    //Name

    var nameInput = document.getElementById('Name');
    var nameError = document.getElementById('nameError');
    nameInput.addEventListener('blur', () => {
    var name = nameInput.value;
    var isValidName = true;
    for (var i = 0; i < name.length; i++) {
        var char = name.charAt(i);
        if (!((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z'))) {
            isValidName = false;
            break;
        }
    }
    if (name.length < 3 || !isValidName) {
        nameError.classList.remove('correct');
        nameError.classList.add('error');
        nameError.textContent = 'The name must be at least 3 letters long and contain only letters';
    } else {
        nameError.textContent = '';
        nameError.classList.toggle('correct', true);
    }
    });
    nameInput.onfocus = function() {
    nameError.classList.remove('error');
    nameError.classList.add('correct');
    };
}