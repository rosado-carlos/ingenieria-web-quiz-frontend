const $ = (selector) => document.querySelector(selector);

document.getElementById("group").textContent = "A";
document.getElementById("cc").textContent = "1065591475";


// Hace que esuche los eventos del botón inscribirme
btnFocus.addEventListener("click", (e) => {
  e.preventDefault();
  // Hace que se haga focus (que se seleccione para empezar a escribir)
  // Al input con id= nombre
  $("#nombre")?.focus();
});


// 2.
const formRegistro = $("#formRegistro");
const btnPrimary = $("#btnPrimary");
const msg = $("#msg");

formRegistro.addEventListener("submit", (e) => {
  e.preventDefault();
  setMessage("");

  if (!formRegistro.checkValidity()) {
    formRegistro.reportValidity();
    setMessage("Revisa los campos marcados.", "error");
    return;
  }

  setMessage("Registro enviado ✅", "success");
  formRegistro.reset();
});
function setMessage(text, type = "") {
  msg.textContent = text;
  msg.classList.remove("success", "error");
  if (type) msg.classList.add(type);
}