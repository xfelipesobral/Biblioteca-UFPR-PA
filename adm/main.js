function usuarios_registrados(){
  $.ajax({
    url: "usuarios_registrados.php",
    success: function(result){
      if(result != 0){
        $('#usuariosRegistrados').html(result);
      } else {
        M.toast({
          html: "<i class='material-icons' style='color: #ff5151'>clear</i>"
        });
      }

    }
  })
}

$('#registrarForm').submit(function() {
  var r_usuario = $('#r_usuario').val();
  var r_nome = $('#r_nome').val();
  var r_senha = $('#r_senha').val();
  var r_nivel = $('#r_nivel').val();

  $.ajax({
    url: "../verificar.php",
    type: "post",
    data: "r_usuario=" + r_usuario +
      "&r_senha=" + r_senha +
      "&r_nome=" + r_nome +
      "&r_nivel=" + r_nivel +
      "&executarFuncao=" + 2,
    success: function(result) {
      if (result == 1) {
        M.toast({
          html: "<i class='material-icons' style='color: #85ff51'>check</i>"
        });
      }
      if (result == 0) {
        M.toast({
          html: "<i class='material-icons' style='color: #ff5151'>clear</i>"
        });
      }
    }
  })

  return false;
})

$('#alterarUsuarioForm1').submit(function() {
  $.ajax({
    url: "alterarUsuario.php",
    type: "post",
    data: "fn=" + 1 + "&$alterarUser_usuario=" + $('#alterarUser_usuario').val(),
    success: function(result) {
      if (result == 0) {
        M.toast({
          html: "<i class='material-icons' style='color: #ff5151'>clear</i>"
        });
      } else {
        $('#formularioAlterarAqui').html(result);
        $('#nivelUsuario').html(nivelUsuario);
        document.getElementById("alterarUsuario").style.display = "block";
      }
    }
  })
  return false;
})

$('#alterarUsuarioForm2').submit(function() {
  $.ajax({
    url: "alterarUsuario.php",
    type: "post",
    data: "fn=" + 2 + "&$alterarUser_usuario2=" + $('#alterarUser_usuario2').val() +
      "&$alterarUser_id=" + $('#alterarUser_id').val() +
      "&$alterarUser_nome=" + $('#alterarUser_nome').val() +
      "&$alterarUser_senha=" + $('#alterarUser_senha').val() +
      "&$alterarUser_nivel=" + $('#alterarUser_nivel').val() +
      "&$alterarUser_alterar=" + $('#alterarUser_alterar').val(),
    success: function(result) {
      if (result == 1) {
        M.toast({
          html: "<i class='material-icons' style='color: #85ff51'>check</i>"
        });
      } else {
        M.toast({
          html: "<i class='material-icons' style='color: #ff5151'>clear</i>"
        });
      }
    }
  })
  return false;
})

$(document).ready(function() {

  $.ajax({
    url: '../templates/menu.php',
    success: function(menu) {
      $('#menuID').html(menu);
    }
  });

  $('select').formSelect();
  $('.dropdown-trigger').dropdown();
  $('.sidenav').sidenav();
  $('.collapsible').collapsible();
})