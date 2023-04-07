function enviar() {
  var sb = document.getElementById("sb").value;
  var desc = document.getElementById("desc").value;

  var liquido = sb - (sb * desc / 100);

  var desconto = liquido - sb

  document.querySelector(".msg").innerHTML = `O valor líquido é de R$ ${liquido.toFixed(2)} e é descontado do seu salário todo mês R$ ${desconto}.`;
  
  /*tofixed limita os decimais de acordo com o valor que colocamos nos parenteses ( ) 
  
  Exemplo:
  
  const numero = 3.14159265359;
  
const numeroFormatado = numero.toFixed(2);

console.log(numeroFormatado); // retorna 3.14
  */
}