// questão 04//

// Crie um algoritmo em js que leia a idade de uma pessoa e informe a sua
// classe eleitoral:
//  não eleitor (abaixo de 16 anos);
//  eleitor obrigatório (entre a faixa de 18 e menor de 65 anos);
//  eleitor facultativo (de 16 até 18 anos e maior de 65 anos, inclusive).

var idade = parseInt(prompt('Digite um número'))

function verificaIdade(idade) {
    if (idade < 16) {
        console.log('pode vota n')
    } else if (idade >= 18 && idade <= 65) {
        console.log('pode votar')
    } else if (idade >= 16 && idade <= 18 || idade > 65) {
        console.log('vota se quiser')
    } else {
        console.log('erro')
    }
}