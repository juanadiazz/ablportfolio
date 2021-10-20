document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form").addEventListener('submit', validform); 
  });
  const nombrebien = nombre => {
      return /^[a-zA-ZÀ-ÿ\s]{1,40}$/. test(nombre);
  }
  const apebien = apellido => {
      return /^[a-zA-ZÀ-ÿ\s]{1,40}$/. test(apellido);
  }
  const telebien = telefono => {
      return /^\d{7,20}$/. test(telefono);
  }
  const ciubien = ciudad => {
      return /^[a-zA-ZÀ-ÿ\s]{1,40}$/. test(ciudad);
  }
  const mailbien = mail => {
      return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/. test(mail);
  }
  function validform(evento) {
      evento.preventDefault();
      var nombre = document.getElementById('nombre');
      if (nombre.value === "" || !nombrebien(nombre.value)){
          alert("Ingrese su nombre correctamente");
          nombre.focus();
          return;
      }
      var apellido = document.getElementById('apellido');
      if (apellido.value === "" || !apebien(apellido.value)){
          alert("Ingrese su apellido correctamente");
          apellido.focus();
          return;
      }
      var ciudad = document.getElementById('ciudad');
      if (ciudad.value === "" || !ciubien(ciudad.value)){
          alert("Ingrese su provincia o ciudad correctamente");
          ciudad.focus();
          return;
      }
      var mail = document.getElementById('mail');
      if (mail.value === "" || !mailbien(mail.value)){
          alert("Ingrese su correo electrónico correctamente");
          mail.focus();
          return;
      }
      var telefono = document.getElementById('telefono');
      if (telefono.value === "" || !telebien(telefono.value)){
          alert("Ingrese su teléfono correctamente");
          telefono.focus();
          return;
      }
      this.submit();
  }