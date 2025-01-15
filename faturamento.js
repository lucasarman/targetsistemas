const fs = require("fs");


const dadosFaturamento = JSON.parse(fs.readFileSync("faturamento_diario.json"));


function calcularFaturamento(faturamentoDiario) {
  
  const diasComFaturamento = faturamentoDiario.filter(
    (faturamento) => faturamento > 0
  );

 
  const menorFaturamento = Math.min(...diasComFaturamento);
  const maiorFaturamento = Math.max(...diasComFaturamento);

  
  const totalFaturamento = diasComFaturamento.reduce(
    (total, valor) => total + valor,
    0
  );
  const mediaMensal = totalFaturamento / diasComFaturamento.length;

  
  const diasAcimaDaMedia = diasComFaturamento.filter(
    (faturamento) => faturamento > mediaMensal
  ).length;

  return {
    menorFaturamento,
    maiorFaturamento,
    mediaMensal,
    diasAcimaDaMedia,
  };
}


const resultados = calcularFaturamento(dadosFaturamento.faturamento_diario);


console.log(`Menor faturamento: R$${resultados.menorFaturamento.toFixed(2)}`);
console.log(`Maior faturamento: R$${resultados.maiorFaturamento.toFixed(2)}`);
console.log(`Média mensal: R$${resultados.mediaMensal.toFixed(2)}`);
console.log(`Número de dias acima da média: ${resultados.diasAcimaDaMedia}`);
