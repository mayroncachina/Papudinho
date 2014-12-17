$( ".home" ).click(function() {
  //alert("back");
  //window.location.replace("#page1");
});


function disabled2 (valor) {
  if(valor == "Sim"){
    document.getElementById("vencimento").disabled = false;
  }
  else{
    document.getElementById("vencimento").disabled = true;
  }
}

function inicial(){
	window.location.replace("#page1");
}