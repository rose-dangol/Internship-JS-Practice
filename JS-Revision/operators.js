let num1 = 6 
let num2 = 5 
let num3 = 6
let docalcl = function(num1, num2){
    console.log(num1++, num1+num2,num1**2)
}
docalcl(num1,num2)
console.log(num1==num2) //false
console.log(num1===num3) //true 

// login simulation
const username = "adminn"
const password = "admin"
if(username=="admin" && password=="admin"){
    console.log("Yay!")
}else if(username!="admin"){
    console.log("Cant login!Not admin")
}
