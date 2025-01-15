function calcularTotal(faturamento) {
  return Object.values(faturamento).reduce((acc, curr) => acc + curr, 0);
}

function exibirPorcentagens(faturamento, total) {
  for (const estado in faturamento) {
    const porcentagem = (faturamento[estado] / total) * 100;
    console.log(`${estado.toUpperCase()}: ${porcentagem.toFixed(2)}%`);
  }
}

const faturamento = {
  sp: 67836.43,
  rj: 36678.66,
  mg: 29229.88,
  es: 27165.48,
  outros: 19849.53,
};

const total = calcularTotal(faturamento);
console.log(`Faturamento Total: R$ ${total.toFixed(2)}`);

exibirPorcentagens(faturamento, total);
