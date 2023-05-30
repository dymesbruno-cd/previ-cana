function fazerPrevisao() {
  var temperatura = parseFloat(document.getElementById('temperatura').value);
  var umidade = parseFloat(document.getElementById('umidade').value);
  var precipitacao = parseFloat(document.getElementById('precipitacao').value);
  
  // Realizar chamada ao modelo de previsão de safra
  // Substitua esta parte pelo código de chamada ao modelo
  
  // Exibir o resultado da previsão
  document.getElementById('resultado').innerText = 'Previsão da Safra: ' + previsao;
}
