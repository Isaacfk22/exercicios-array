frutas = ["Maçã", "Kiwi", "Uva", "Banana", "Laranja", "Manga"]
console.log(frutas)
posicao = ["Maçã", "Kiwi", "Uva", "Banana", "Laranja", "Manga"].indexOf("Banana")
console.log(posicao)
if(posicao > -1){
frutas.splice(posicao, 1);
console.log(frutas)
}
else{
    console.log("Fruta não encontrada")
}