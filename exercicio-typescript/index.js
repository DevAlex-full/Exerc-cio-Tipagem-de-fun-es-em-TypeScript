// Função que soma dois números com tipagem explícita
function somar(num1, num2) {
    return num1 + num2;
}
// Testando a função com diferentes valores
var resultado1 = somar(10, 20);
console.log("A soma de 10 + 20 \u00E9: ".concat(resultado1));
var resultado2 = somar(50, 75);
console.log("A soma de 50 + 75 \u00E9: ".concat(resultado2));
var resultado3 = somar(100, 250);
console.log("A soma de 100 + 250 \u00E9: ".concat(resultado3));
// Exemplos adicionais:
// Arrow function com tipagem explícita
var multiplicar = function (num1, num2) {
    return num1 * num2;
};
console.log("\nMultiplica\u00E7\u00E3o: 5 \u00D7 8 = ".concat(multiplicar(5, 8)));
// Função com mais de uma operação
function calcularMedia(nota1, nota2, nota3) {
    var soma = nota1 + nota2 + nota3;
    var media = soma / 3;
    return media;
}
var media = calcularMedia(7.5, 8.0, 9.5);
console.log("\nM\u00E9dia das notas: ".concat(media.toFixed(2)));
