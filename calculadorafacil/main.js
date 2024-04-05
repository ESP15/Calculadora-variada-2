function randomnumero(numero){
    const result = Math.floor(Math.random() *numero);
    console.log(result);
    return result
};

function numeros(numero01, numero02, numero03){
    return numero01 + numero02 + numero03;
}

console.log (numeros(randomnumero(100),randomnumero(200),randomnumero(300)))

