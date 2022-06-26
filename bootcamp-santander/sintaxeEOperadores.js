// Atividade
/* 
1. Crie uma função que recebe dois números como parâmetros.
2. Confira se os números são iguais.
3. Confira se a soma dos números é maior que 10 ou menor que 20.
4. Retorne uma string dizendo "Os números num1 e num2 não/são iguais. 
5. Sua soma é "soma", que é "maior/menor" que 10 e "maior/menor" que 20.
*/

/*
Exemplo:
input: 1,2 
Output: Os números 1 e 2 não são iguais. Sua soma é 3, que é menor que 10 e menor que 20
*/

function comparaValores(num1, num2){
    if (num1 === num2){
        return `Os números ${num1} e ${num2} são iguais`
    }
    return `Os números ${num1} e ${num2} não são iguais.`
}

function somaValores(num1, num2){
    const soma = num1 + num2;
    let maiorDez = 'menor';
    let maiorVinte = 'menor';

    if (soma > 10){
        maiorDez = 'maior';
    }

    if (soma > 20){
        maiorVinte = 'maior';
    }

    return `Sua soma é ${soma}, que é ${maiorDez} do que 10 e ${maiorVinte} do que 20.`;
}

function recebeValor(num1, num2){;
    const comparador = comparaValores(num1, num2);
    const somador = somaValores(num1, num2);

    return `${comparador} ${somador}`
}

console.log(recebeValor(4, 5));