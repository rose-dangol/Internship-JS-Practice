let user = { name: "Asha", age: 22, country: "Nepal" }
// for…in → iterate keys

for(let keys in user){
    console.log(`${keys}=> ${user[keys]}`)
}

// Object.keys()
let k= Object.keys(user) //array of keys
console.log(k)

// Object.values()
Object.values(user).forEach(val=>{
    console.log(val)
})
// Object.entries()
Object.entries(user).forEach(([key,value])=>{
    console.log(key,value)
})