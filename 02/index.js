const precos = ["100", "500", "100", "200", "50"]
let qtdArray = precos.length
let soma = 0
let menor = precos[0];


for (let preco of precos){
    soma += preco;

    if (preco < menor){
        menor = preco;
    }
}

if(qtdArray >= 5){
    console.log(soma - menor);

} else{
    console.log(soma);
}
