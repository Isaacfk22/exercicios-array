numeros= [7, 0, 30]
console.log(numeros)
n1 = numeros[0]
n2 = numeros[1]
n3 = numeros[2]
ordemCrescente = []

if(n1>n2 && n1>n2){
    console.log(n1 + " é o Maior")
    ordemCrescente.unshift(n1)
}
else if(n2>n1 && n2>n3){
    console.log(n2 + " é o Maior")
    ordemCrescente.unshift(n2)
}
else if(n3>n1 && n3>n1){
    console.log(n3 + " é o Maior")
    ordemCrescente.unshift(n3)
}


if(n1<n2 && n1<n3){
    console.log(n1 +" é o menor")
    ordemCrescente.push(n1)
}
else if(n2<n3 && n2<n1){
    console.log(n2 +" é o menor")
    ordemCrescente.push(n2)
}
else if(n3<n2 && n3<n1){
    console.log(n3 +" é o menor")
    ordemCrescente.push(n3)
}

console.log(ordemCrescente)