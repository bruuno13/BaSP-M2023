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
    var nameInput = document.getElementById("Name");
    var nameS = document.getElementById("namemsg");


    nameInput.addEventListener("blur", () =>{

    var Name = namemsg.value;


    var isValidName = /^[a-zA-Z]{3,}$/.test(Name);

    nameS.classList.toggle('correct', isValidName);

    if(!isValidName) {
        nameS.classList.remove("correct");
        nameS.classList.add("error");
        nameS.textContent = "The name must have at least 3 letters";
    }else {
        nameS.textContent= "";
    }
    });
}
