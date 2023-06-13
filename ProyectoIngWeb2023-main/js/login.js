// Función para validar el formulario de inicio de sesión
function validarInicioSesion(event) {
  event.preventDefault(); // evitar el funcionamiento default del boton
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var usernameError = document.getElementById("username-login-error");
  var passwordError = document.getElementById("password-login-error");

  // Verificacipón usuario
  if (!username) {
    usernameError.innerHTML = "El campo de usuario es obligatorio.";
  } else {
    usernameError.innerHTML = "";
  }

  // Verificación contraseña
  if (!password) {
    passwordError.innerHTML = "El campo de contraseña es obligatorio.";
  } else {
    passwordError.innerHTML = "";
  }
  if (username || password) {
    return false; // Prevent form submission
  }

  if (username && password) {
    window.location.href = "index.html";
  }

};

// Listener
document.getElementById("login-button").addEventListener("click", validarInicioSesion);



