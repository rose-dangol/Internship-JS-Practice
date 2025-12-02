let basicInfo = {
  firstName: "Ram",
  lastName: "Ram",
}

let contactInfo = {
    email: "ram@gmail.com",
    phone: "9800000000",
}

let person = {...basicInfo,...contactInfo}
console.log(person)


function collectProperties({firstName,lastName,...other}){
    return{
        firstName: firstName, 
        lastName: lastName,
        other:other
    }
}
console.log(collectProperties(person)) 