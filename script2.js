// Escreva um algoritmo em js que leia um número e informe se ele é divisível por
// 10, por 5 ou por 2 ou se não é divisível por nenhum deles.

var num = parseInt(prompt('Digite um número'))

function verificarNumero(num) {
    if (num % 10 === 0) {
        console.log('O número é divisível por 10.')
    } else if (num % 5 === 0) {
        console.log('O número é divisível por 5.')
    } else if (num % 2 === 0) {
        console.log('"O número é divisível por 2."')
    } else {
        console.log("O número não é divisível por 10, 5 ou 2.")
    }
}