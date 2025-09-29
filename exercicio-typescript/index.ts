// Função que soma dois números com tipagem explícita
function somar(num1: number, num2: number): number {
  return num1 + num2;
}

// Testando a função com diferentes valores
const resultado1 = somar(10, 20);
console.log(`A soma de 10 + 20 é: ${resultado1}`);

const resultado2 = somar(50, 75);
console.log(`A soma de 50 + 75 é: ${resultado2}`);

const resultado3 = somar(100, 250);
console.log(`A soma de 100 + 250 é: ${resultado3}`);

// Exemplos adicionais:

// Arrow function com tipagem explícita
const multiplicar = (num1: number, num2: number): number => {
  return num1 * num2;
};

console.log(`\nMultiplicação: 5 × 8 = ${multiplicar(5, 8)}`);

// Função com mais de uma operação
function calcularMedia(nota1: number, nota2: number, nota3: number): number {
  const soma = nota1 + nota2 + nota3;
  const media = soma / 3;
  return media;
}

const media = calcularMedia(7.5, 8.0, 9.5);
console.log(`\nMédia das notas: ${media.toFixed(2)}`);