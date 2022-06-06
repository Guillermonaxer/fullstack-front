function showalertnombres() {
  document.getElementById("nombrelabel").style.color = "red";
}
function showalertapellidos() {
  document.getElementById("apellidoslabel").style.color = "red";
}
function changenombres() {
  document.getElementById("nombrelabel").style.color = "black";
}
function changeapellidos() {
  document.getElementById("apellidoslabel").style.color = "black";
}
function changetamaño() {
  document.getElementById("labeltamaño").style.color = "red";
}

document.getElementById("form"),
  addEventListener("submit", function (event) {
    if (document.getElementById("nombre").value == "") {
      showalertnombres();
      event.preventDefault();
    }
    if (document.getElementById("apellidos").value == "") {
      showalertapellidos();
      event.preventDefault();
    }
    if (document.getElementById("nombre").value != "") {
      changenombres();
    }
    if (document.getElementById("apellidos").value != "") {
      changeapellidos();
    }
    if (document.getElementById("tamaño").value == "selecciona") {
      changetamaño();
      event.preventDefault();
    }
    if (document.getElementById("tamaño").value == "S") {
      changetamaño();
      event.preventDefault();
    }
  });

$("#tamaño").on("change", function () {
  console.log(this.value);
  // Aqui va la llamada AJAX con JQuery
  if (this.value == "S") {
    texto = "No disponible";

    $("span").text(texto);
  }
  if (this.value != "S" && this.value != "selecciona") {
    texto = "Disponible";
    $("span").text(texto);
  }
  if (this.value == "selecciona") {
    texto = "";
    $("span").text(texto);
  }
});
