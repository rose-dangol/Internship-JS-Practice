for(i=1;i<=50;i++){
    console.log(i)
}

while(i!=101){
    console.log(i)
    i++
}

let array = [1,2,3,4,5,6,7,8,9,10]
for (let item of array){
    if(item%2==0){
        console.log(item)
    }
}

const obj = {
    name:"rose",
    age:22,
    address:"ktm"
}
for (let key in obj){
    console.log(`${key}=>${obj[key]}`)
}
