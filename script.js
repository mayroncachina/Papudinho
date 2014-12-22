$( ".home" ).click(function() {
  //alert("back");
  //window.location.replace("#page1");
});

//Habilita e desabilita o o campo de colocar a data
function disabled2 (valor) {
  if(valor == "Sim"){
    document.getElementById("vencimento").disabled = false;
  }
  else{
    document.getElementById("vencimento").disabled = true;
  }
}

//Envia o usuario para a página inicial
function inicial(){
	window.location.replace("#page1");
}