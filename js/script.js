document.getElementById("botaoEnviar").addEventListener("click", validaFormulario )

var nomeUsuaria = "nome";
var emailUsuaria = "email";
var telefoneUsuaria = "telefone";


function validaFormulario(){

  if(document.getElementById(nomeUsuaria).value != "" &&
      document.getElementById(emailUsuaria).value != "" &&
      document.getElementById(telefoneUsuaria).value != "" ){

    alert("Prontinho! você receberá as novidades por email.")
   }else{
     alert("Por favor, preencha os campos nome, email e telefone.")
   }
 }