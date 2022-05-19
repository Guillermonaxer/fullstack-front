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
  });
