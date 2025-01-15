function pertenceFibonacci(numero) {
  let a = 0,
    b = 1;
  while (b < numero) {
    let temp = b;
    b = a + b;
    a = temp;
  }
  return b === numero;
}

const numero = 21; // Alterar aqui para testar outro número!
if (pertenceFibonacci(numero)) {
  console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
  console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
}
