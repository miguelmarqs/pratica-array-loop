const sequencia = [">",">",">","<",">"]
let indice = 0

for (let i of sequencia){
    if (i === ">"){
        indice++
    } else{
        indice--
    }
    if (indice > 6){
        indice = 0
    } else if(indice < 0){
        indice= 6
    }
console.log(indice)
}