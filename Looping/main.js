

const x = [3,5,12];
let totalFor = 0

for(let i = 0; i < x.length; i++){
    totalFor = totalFor + x[i]
    console.log(x[i])
}


console.log(`Total menggunakan For = ${totalFor}`)

let i = 0
let totalWhile = 0


while(i < x.length){
    console.log(x[i])
    totalWhile = totalWhile + x[i]
    i++
}


console.log(`Total menggunakan While = ${totalWhile}`)

let totalDoWhile = 0

do{
    console.log(x[i])
    totalDoWhile = totalDoWhile + x[i]
    i++
}

while(i < x.length)

console.log(`Total menggunakan Do While ${totalDoWhile}`)