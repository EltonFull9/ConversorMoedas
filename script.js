function Converter() {
  var caixa = document.getElementById("Tipo de conversão");
  var valor = document.getElementById("valor");
  var retorno = document.getElementById("valorConvertido");
  var valorbitcoin;
  caixa = caixa.value;
  valor = valor.value;

  if (caixa == "DxR") {
    valor = parseFloat(valor) * 5;
    valorbitcoin = valor * 0.000005;
    retorno.innerHTML =
      " O resultado em real é R$: " +
      valor +
      "<br>  O resultado em Bitcoin é:" +
      valorbitcoin.toFixed(6);
  } else if (caixa == "QxAL") {
    valor = parseFloat(valor) * 0.0000000000001057;

    retorno.innerHTML = " O resultado em anos luz é: " + valor;
  } else {
    valor = parseFloat(valor) * 1.8 + 32;

    retorno.innerHTML = " O resultado em Fahrenheit é: " + valor.toFixed(2);
  }
}