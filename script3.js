// Criar um algoritmo em js que leia o um número inteiro entre 1 e 7 e escreva o
// dia da semana correspondente. Caso o usuário digite um número fora desse intervalo,
// deverá aparecer uma mensagem informando que não existe dia da semana com esse
// número.

var num = parseInt(prompt('Digite um número'))

function verificarNumero(num) {

    if (num === 2) {
        console.log('Segunda')
    } else if (num === 3) {
        console.log('Terça')
        console.log('Quarta')
    } else if (num === 5) {
        console.log('Quinta')
    } else if (num === 6) {
        console.log('Sexta')
    } else if (num === 7) {
        console.log('Sábado') / } else if (num === 1) {
            console.log('Domingo')
        } else {
    }
}

verificarNumero(num)