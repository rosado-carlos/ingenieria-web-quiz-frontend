const $ = (selector) => document.querySelector(selector);

const form = $("#formRegistro");
const result = $("#result");
const inputNombre = $("#nombre");
const selectEstado = $("#state");

function init() {
  document.getElementById("group").textContent = "A";
  document.getElementById("cc").textContent = "1065591475";

  form.addEventListener("submit", handleSubmit);
  inputNombre.addEventListener("input", clearMessage);
}

function handleSubmit(event) {
  event.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const name = inputNombre.value.trim();
  const mood = selectEstado.value;

  const message = buildMessage(name, mood);
  renderMessage(message);
}

function buildMessage(name, mood) {
  if (mood === "fe") {
    return "Muy bien, " + name;
  }

  if (mood === "se") {
    return name + " esta concentrado";
  }

  if (mood === "ca") {
    return  name + ", hechate un sueñito.";
  }
  return "Algo fallo";
}

function renderMessage(text) {
  result.textContent = text;
  result.classList.remove("error");
  result.classList.add("success");
}

function clearMessage() {
  result.textContent = "";
  result.classList.remove("success", "error");
}

init();