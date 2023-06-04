const letra = "m"
const palavras = ["mamao","maca","melao","melancia","laranja"]

let erros = 0

for (let palavra of palavras){
    let primeiraLetra = palavra[0];

    if (primeiraLetra !== letra){
        erros++
    }

}

console.log(erros)