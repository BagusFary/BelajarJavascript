

const x = [3,5,12];


// For
let totalFor = 0

for(let i = 0; i < x.length; i++){
    totalFor = totalFor + x[i]
    console.log(x[i])
}


console.log(`Total menggunakan For = ${totalFor}`)

// While

let i = 0
let totalWhile = 0

while(i < x.length){
    console.log(x[i])
    totalWhile = totalWhile + x[i]
    i++
}


console.log(`Total menggunakan While = ${totalWhile}`)


// Do While
let j = 0
let totalDoWhile = 0

do{
    console.log(x[j])
    totalDoWhile = totalDoWhile + x[j]
    j++
}

while(j < x.length)


console.log(`Total menggunakan Do While ${totalDoWhile}`)