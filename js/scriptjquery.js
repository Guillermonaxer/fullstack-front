$(function(){


    function showalertnombres() {
        $("#nombrelabel").css("color","red")
      }
      function showalertapellidos() {
        $("#apellidoslabel").css("color","red")
      }
      function changenombres() {
        $("#nombrelabel").css("color","black")
      }
      function changeapellidos() {
        $("#apellidoslabel").css("color","black")
      }

$("#form").submit(function(event){
    if ($("#nombre").val() == "") {
        showalertnombres();
        event.preventDefault()}
        if ($("#apellidos").val() == "") {
        showalertapellidos();
        event.preventDefault()}
        if ($("#nombre").val() != "") {
        changenombres();}
        if ($("#apellidos").val() != "") {
        changeapellidos();}
        ;

    })});