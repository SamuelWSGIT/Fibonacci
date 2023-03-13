function fibonacci() {
  const inserido = parseInt(document.getElementById("numero").value);
  var resposta = document.getElementById("resposta");

  let primeiro = 0; // primeiro numero
  let segundo = 1; // segundo numero
  let soma = 0; // soma

  while (inserido > soma) {
    soma = primeiro + segundo;
    primeiro = segundo;
    segundo = soma;
  }

  if (inserido == soma) {
    resposta.innerHTML = `O numero ${inserido} pertence a sequência de Fibonacci`;
  } else {
    resposta.innerHTML = `O numero ${inserido} não pertence a sequência de Fibonacci`;
  }
}
