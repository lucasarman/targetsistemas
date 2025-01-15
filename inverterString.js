function inverterString(str) {
  let stringInvertida = "";
  for (let i = str.length - 1; i >= 0; i--) {
    stringInvertida += str[i];
  }

  return stringInvertida;
}

// Exemplo de string informada
const entrada = "Hello, World!";

// Inverter a string e exibir
const resultado = inverterString(entrada);
console.log(`String invertida: ${resultado}`);
