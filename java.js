function validarCampos() {
  var membresiaSelect = document.getElementById("membresia");
  var membresia = membresiaSelect.value;

  if (membresia === "") {
    alert("Por favor, seleccione una membresía.");
    return false; // Detener el envío del formulario
  }

  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var email = document.getElementById("email").value;

  if (nombre === "" || apellido === "" || email === "") {
    alert("Por favor, complete todos los campos.");
    return false; // Detener el envío del formulario
  }

  return true; // Permitir el envío del formulario
}

document.getElementById("formulario").addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar el envío del formulario

  if (validarCampos()) {
    alert("¡Compra confirmada!");
  }
});

function calcularTotal() {
  const membresiaSelect = document.getElementById("membresia");
  const totalPagarInput = document.getElementById("totalPagar");
  const membresia = membresiaSelect.value;
  let precioBase = 2000; // Precio base de la membresía Classic

  if (membresia === "Gold") {
    precioBase *= 1.2; // Aumento del 5% para la membresía Gold
  } else if (membresia === "Platinum") {
    precioBase *= 1.5; // Aumento del 20% para la membresía Platinum
  } else if (membresia === "Black") {
    precioBase *= 1.8; // Aumento del 40% para la membresía Black
  }

  totalPagarInput.value = precioBase.toFixed(2);
}

document.getElementById("confirmarcompra").addEventListener("click", function() {
  const membresiaSelect = document.getElementById("membresia");
  const membresia = membresiaSelect.value;

  if (membresia === "") {
    alert("Por favor, seleccione una membresía.");
  } else {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;

    if (nombre === "" || apellido === "" || email === "") {
      alert("Por favor, complete todos los campos.");
    } else {
      alert("¡Compra confirmada!");
    }
  }
});
