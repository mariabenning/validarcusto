function resultado(){
    var vcusto= parseFloat(document.getElementById("vcusto").value); 
    console.log(vcusto)

  var vvenda= parseFloat(document.getElementById("vvenda").value); 
    console.log(vvenda)

  var comissao=  vvenda * 0.03;
  var resultadofinal= vvenda - comissao;




    if (resultadofinal > vcusto){
        document.querySelector('#resultadonotas').innerHTML = "LUCRO" 
        

} else if  (resultadofinal ===vcusto)  {

 document.querySelector('#resultadonotas').innerHTML = "NULO"

} else {

document.querySelector('#resultadonotas').innerHTML = "PREJUIZO"

} 

}
