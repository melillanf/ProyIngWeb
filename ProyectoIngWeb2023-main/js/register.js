// Función para validar el formulario de registro
function validarRegistro(event) {
    event.preventDefault(); // evitar el funcionamiento default del boton
    var username = document.getElementById("username").value; // obtiene el valor del input de usuario
    var password = document.getElementById("password").value; // obtiene el valor del input de contraseña
    var confirmPassword = document.getElementById("confirm-password").value; // obtiene el valor del input de confirmar contraseña
    var usernameError = document.getElementById("username-error"); // obtiene el elemento de mensaje de error de usuario
    var passwordError = document.getElementById("password-error"); // obtiene el elemento de mensaje de error de contraseña
    var confirmPasswordError = document.getElementById("confirm-password-error"); // obtiene el elemento de mensaje de error de confirmar contraseña

    // Verifica si el usuario es válido
    if (!username) {
      usernameError.innerHTML = "El campo de usuario es obligatorio.";
    } else {
      usernameError.innerHTML = "";
    }

    // Verifica si la contraseña es válida
    if (!password) {
      passwordError.innerHTML = "El campo de contraseña es obligatorio.";
    } else if (password.length < 6) {
      passwordError.innerHTML = "La contraseña debe tener al menos 6 caracteres.";
    } else {
      passwordError.innerHTML = "";
    }

    // Verifica si la confirmación de la contraseña es válida
    if (!confirmPassword) {
      confirmPasswordError.innerHTML = "Debes confirmar tu contraseña.";
    } else if (confirmPassword !== password) {
      confirmPasswordError.innerHTML = "Las contraseñas no coinciden.";
    } else {
      confirmPasswordError.innerHTML = "";
    }
  };

  //Listener
  document.getElementById("register-button").addEventListener("click", validarRegistro);