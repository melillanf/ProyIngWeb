$(document).ready(function() {
  $("#contact-btn").click(function() {
    $("#contenedor").load("contacto.html", function() {

      $("#contenedor").on("click", ".close", function() {
        $("#contenedor").fadeOut();
      });
      $("#contenedor").show();
      $('#contenedor').fadeIn('slow');

      // Agregamos el siguiente código para manejar el envío del formulario
      $("form").submit(function(e) {
        e.preventDefault();
        var nombre = $("#nombre").val();
        var correo = $("#correo").val();
        var mensaje = $("#mensaje").val();
        if (nombre && correo && mensaje) {
          // Enviar formulario
          alert("Formulario enviado correctamente");
          $("#contenedor").fadeOut();
        } else {
          alert("Por favor completa el formulario de envio");
        }
      });

    });
  });
});
