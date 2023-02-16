/*operadores de comparação

> maior que 
< menor que
>= manior que ou igual a 
<= menor que ou igual a 
== igualdade (valor)**********
=== igualdade estrita (valor e tipo)
!= diferente (valor) *********
!== diferente estrito (valor e tipo)
*/

let dez = 1000
let quatro = 111  // criando  variaveis com o let

let um = 1
let dois = 1

// MAIOR QUE O VALOR DA  DIREITA
if (dez > quatro) {
    console.log(' Sim dez maior que quatro')
} else {
    console.log('não é maior que quatro')
}

// MENOR QUE O VALOR DA ESQUERDA
if (dez < quatro) {
    console.log(quatro + ' Sim quatro é MAIOR que 10')
}
else {
    console.log('não ,  esse valor contido na variavel DEZ que é o valor de ' + dez + ' NÃO é menor que o contido no valor da varaivel quatro que é de ' + quatro)
}
if (dez >= quatro) {
    console.log("Sim dez é maior")
} else {
    console.log("Não, dez não é menor que quatro")
}
// MAIOR OU IGUAL
if (dez <= quatro) {
    console.log('Sim! dez é maior  que o valor da direita')
} else {
    console.log("Não! não é  maior ou igual a quatro")
}
// valores de igualdade
if (dez == quatro) {
    console.log('dez é igual a quatro')
} else {
    console.log('dez não é igual a quatro')
}

// É IDENTICO TANTO TIPO COMO VALOR
if (dez === quatro) {
    console.log('sim é identico')
} else {
    console.log('não')
}

// É DIFERENTE O VALOR
if (dez != quatro) {
    console.log("Sim, dez ´pe diferente de quatro em seu valor")
} else {
    console.log("Não dez não é diferente de quatro em seu valor")
}

// É DIFERENTE O VALOR E O TIPO
if (dez !== quatro) {
    console.log(" Sim dez é diferente no valor e em seu tipo ")
} else {
    console.log("Não, dez não é diferente no valor nem no tipo")
}
if (um !== dois) {
    console.log("Sim um é diferente em seu valor")
} else {
    console.log(" não , um não é diferente em seu valor")
}
