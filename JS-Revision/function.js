function addition (a,b){
    console.log(a+b)
}
let add = function(c,d){
    return c+d
}
let addd = ()=>{
    return (6+2)
}
addition(4,6)
console.log(add(8,1))
console.log(addd())

function largest(array){
    let largest = array[0]
    for (let i of array){
        if (i>largest){
            largest=i
        }
    }
    console.log("largest item:" + largest)
}
let array = [1,4,2,9,3]
largest(array)

// default parameters
function myFunc (x,y=9){
    return x==y
}
console.log(myFunc(2))