const car = {
    brand:"BMW",
    model:"911",
    year:"2021",
} 

Object.seal(car)    //no add, no remove, can modify
car.brand = "ford"
console.log(car)
car.engine = "abcd"
console.log(car)

delete car.brand
console.log(car)

let person = {
  firstName: "Ram",
  lastName: "Sharma",
  contact: "ram@gmail.com",
}
Object.freeze(person)  //no add, no remove, no modify
person.firstName="abc"
console.log(person)
