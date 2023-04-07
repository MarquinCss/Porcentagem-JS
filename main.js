function enviar() {
  var nome = document.getElementById("nome").value;

  var sb = document.getElementById("sb").value;
  var desc = document.getElementById("desc").value;

  var liquido = sb - (sb * desc / 100);

  var desconto = liquido - sb

  document.querySelector(".msg").innerHTML = `Então ${nome} o valor líquido é de R$ ${liquido.toFixed(2)} e é descontado do seu salário todo mês R$ ${desconto}.`;
}
