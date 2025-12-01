array = [1,2,3,4,5,6,7,8,9,10]
console.log(array)

array.push(11)
console.log(array)

array.pop()
console.log(array)

array.unshift(0)  //add 0th index ma
console.log(array)

array.shift()  //removes first element
console.log(array)

// Map
// let updatedArray= array.map(i=>i+1)
let updatedArray = array.map(function(i){
    if(i%2==0){i=>"*"}
    else{i=>i+1}
})
console.log(updatedArray)

// filter
let filteredArray = array.filter(i => i<6);
console.log(filteredArray)

// reduce
let reduceArray = array.reduce((prev,current)=>current=prev+current)
console.log(reduceArray)

// sorting
let stringArray = ["apple", "ace", "wonder", "fairy"]
console.log(stringArray.sort())

// flattening an array
let nestedArray = [[1, 2, 3], [1, 3, 4], [4, 5, 6]]
console.log(nestedArray.flat(1))