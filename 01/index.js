const nomeCorrompido = "*Canis %lupus )familiaris";
//const nomeCorrompido = "Felis) silvestris *catus&"
//const nomeCorrompido = "$Ailuropoda@ melanoleuca!"

let dadoPurificado = "";

for (let caractere of nomeCorrompido){
    if(caractere === "!" 
    || caractere === "@" 
    || caractere === "#" 
    || caractere === "$"
    || caractere === "%" 
    || caractere === "&" 
    || caractere === "*" 
    || caractere === "("
    || caractere === ")"
    || caractere === "."){
    } else{
        dadoPurificado += caractere;
    }
}
console.log(dadoPurificado)