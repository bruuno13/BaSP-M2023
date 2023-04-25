window.onload = function (){
    // email
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
    var Idvalid = false;

    Idinput.addEventListener('blur', function () {
    var number = parseInt(Idinput.value);
    if (!isNaN(number) && Number.isInteger(number) && number.toString().length >= 7) {
        Idvalid = true;
        Idmsg.classList.remove("error");
        Idmsg.classList.add("correct");
        Idmsg.textContent = "Id valid";
    } else {
        Idvalid = false;
        Idmsg.classList.remove("correct");
        Idmsg.classList.add("error");
        Idmsg.textContent = "Id invalid, only numbers and must have more than 7 numbers";
    }
    });

    Idinput.onfocus = function () {
    Idmsg.classList.remove("error");
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

    //Last name
    var LastnameInput = document.getElementById('Last-name');
    var LastnameError = document.getElementById('lastnameerror');
    LastnameInput.addEventListener('blur', () => {
    var Lastname = LastnameInput.value;
    var isValidName = true;
    for (var i = 0; i < Lastname.length; i++) {
        var char = Lastname.charAt(i);
        if (!((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z'))) {
            isValidName = false;
            break;
        }
    }
    if (Lastname.length < 3 || !isValidName) {
        LastnameError.classList.remove('correct');
        LastnameError.classList.add('error');
        LastnameError.textContent = 'The last name must be at least 3 letters long and contain only letters';
    } else {
        LastnameError.textContent = '';
        LastnameError.classList.toggle('correct', true);
    }
    });
    LastnameInput.onfocus = function() {
    LastnameError.classList.remove('error');
    LastnameError.classList.add('correct');
    }

    // phone number
    var phoneInput = document.getElementById("Phone");
    var phoneMsg = document.getElementById("phoneMsg");
    var phoneValid = false;

    phoneInput.addEventListener('blur', function () {
    var number = phoneInput.value.trim();
    var isNumeric = !isNaN(parseFloat(number)) && isFinite(number);

    if (isNumeric && number.length == 10) {
        phoneValid = true;
        phoneMsg.classList.remove("error");
        phoneMsg.classList.add("correct");
        phoneMsg.textContent = "Phone number valid";
    } else {
        phoneValid = false;
        phoneMsg.classList.remove("correct");
        phoneMsg.classList.add("error");
        phoneMsg.textContent = "Phone number invalid, has to have 10 numbers";
    }
    });

    phoneInput.onfocus = function () {
    phoneMsg.classList.remove("error");
    phoneMsg.classList.add("correct");
    };

    // Adress
    var addressInput = document.getElementById("Address");
    var addressMsg = document.getElementById("addressMsg");
    var addressValid = false;

    addressInput.addEventListener('blur', function () {
    var address = addressInput.value.trim();
    if (address.length >= 5 && address.indexOf(" ") > 0 && address.indexOf(" ") < address.length - 1) {
        var isValid = true;
        for (var i = 0; i < address.length; i++) {
        var charCode = address.charCodeAt(i);
        if (!(charCode >= 48 && charCode <= 57) && !(charCode >= 65 && charCode <= 90) && !(charCode >= 97 && charCode <= 122) && !(charCode == 32)) {
            isValid = false;
            break;
        }
        }
        if (isValid) {
        addressValid = true;
        addressMsg.classList.remove("error");
        addressMsg.classList.add("correct");
        addressMsg.textContent = "Address valid";
        } else {
        addressValid = false;
        addressMsg.classList.remove("correct");
        addressMsg.classList.add("error");
        addressMsg.textContent = "Address must contain only letters, numbers and spaces";
        }
    } else {
        addressValid = false;
        addressMsg.classList.remove("correct");
        addressMsg.classList.add("error");
        addressMsg.textContent = "Address must be at least 5 characters and contain a space in the middle";
    }
    });

    addressInput.onfocus = function () {
    addressMsg.classList.remove("error");
    addressMsg.classList.add("correct");
    };

    //Locality
    var localityInput = document.getElementById("Locality");
    var localityMsg = document.getElementById("LocalityMsg");
    var localityValid = false;

    localityInput.addEventListener('blur', function () {
    var locality = localityInput.value.trim();


    var validChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ";
    var valid = true;
    for (var i = 0; i < locality.length; i++) {
        if (validChars.indexOf(locality.charAt(i)) === -1) {
        valid = false;
        break;
        }
    }

    if (locality.length >= 4 && valid) {
        localityValid = true;
        localityMsg.classList.remove("error");
        localityMsg.classList.add("correct");
        localityMsg.textContent = "Locality valid";
    } else {
        localityValid = false;
        localityMsg.classList.remove("correct");
        localityMsg.classList.add("error");
        localityMsg.textContent = "Locality must contain at least 4 alphanumeric characters";
    }
    });

    localityInput.onfocus = function () {
    localityMsg.classList.remove("error");
    localityMsg.classList.add("correct");
    };

    // Postal

    var postalCodeInput = document.getElementById("Postal");
    var postalCodeMsg = document.getElementById("postalMsg");
    var postalCodeValid = false;

    postalCodeInput.addEventListener('blur', function () {
    var postalCode = postalCodeInput.value.trim();

    if (!isNaN(postalCode) && postalCode.length >= 4 && postalCode.length <= 5) {
        postalCodeValid = true;
        postalCodeMsg.classList.remove("error");
        postalCodeMsg.classList.add("correct");
    } else {
        postalCodeValid = false;
        postalCodeMsg.classList.remove("correct");
        postalCodeMsg.classList.add("error");
        postalCodeMsg.textContent = "Must have between 4 and 5 numbers";
    }
    });

    postalCodeInput.onfocus = function () {
    postalCodeMsg.classList.remove("error");
    postalCodeMsg.classList.add("correct");
    };
}