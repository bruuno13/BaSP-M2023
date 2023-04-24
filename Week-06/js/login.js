var EmailInput = document.getElementById("Email");
var repeatPasswordInput = document.getElementById("Password");
var emialErrorMsg = document.getElementById("errorMail");
var repeatPasswordErrorMsg = document.getElementById("errorPassword");

//password input

//este password tiene como requisito al menos una mayuscula, una minuscula y un numero
EmailInput.onblur = function () {
  var Email = EmailInput.value;
  var hasBigLetter = false;
  var hasSmallLetter = false;
  var hasNumber = false;
  for (var i = 0; i < Email.length; i++) {
    var char = Email.charAt(i);
    if (char >= "0" && char <= "9") {
      hasNumber = true;
    } else if (char === char.toUpperCase()) {
      hasBigLetter = true;
    } else if (char === char.toLowerCase()) {
      hasSmallLetter = true;
    }
  }

  if (!hasBigLetter || !hasSmallLetter || !hasNumber) {
    emailErrorMsg.classList.remove("correct");
    emailErrorMsg.classList.add("error");
    emailErrorMsg.textContent =
      "este campo necesita al menos una mayuscula, una minuscula y un numero";
  }

  if (Email.length < 5) {
    emailErrorMsg.classList.remove("correct");
    emailErrorMsg.classList.add("error");
    emailErrorMsg.textContent = "este campo necesita al menos 5 letras";
  }
};

EmailInput.onfocus = function () {
    emailErrorMsg.classList.remove("error");
    emailErrorMsg.classList.add("correct");
};

//repeat password input

repeatPasswordInput.onblur = function () {
  var Email = EmailInput.value;
  var repeatPassword = repeatPasswordInput.value;
  if (repeatPassword !== Email || repeatPassword.length === 0) {
    repeatPasswordErrorMsg.classList.remove("correct");
    repeatPasswordErrorMsg.classList.add("error");
    repeatPasswordErrorMsg.textContent = "las contraseñas no coinciden";
  }
};

repeatPasswordInput.onfocus = function () {
  repeatPasswordErrorMsg.classList.remove("error");
  repeatPasswordErrorMsg.classList.add("correct");
};
