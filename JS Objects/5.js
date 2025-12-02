//Object destructuring
let person = {
  firstName: "Ram",
  lastName: "Sharma",
  contact: {
    email: "ram@gmail.com",
    phone: "9800000000"
  }
}

const {firstName, lastName} = person
// const {email, phone} = person.contact
const {contact:{email, phone}} = person
console.log(email)

const {firstName:fullname} = person
console.log(fullname)

const {gender= "Male"} = person
console.log(person)