const students = {
    name:"abc",
    age:22,
    marks: 90
}
students.percentage = 99;
console.log(students)

delete students.percentage

students.name= "rose"
console.log(students)

// looping through keys and values
Object.values(students).forEach(val =>{
    console.log(val)
})

Object.keys(students).forEach(k=>{
    console.log(k,students[k])
})
Object.entries(students).forEach(([key,value])=>{
    console.log(`${key} => ${value}`)
})
for (keys in students){
    console.log(`${keys} -- ${students[keys]}`)
}

const student = {
    name: "John",
    age: 20,
    marks: {
        science: 70,
        math: 75
    },
    display: function(){
        let total=0;
        for (keys in this.marks){
            total += this.marks[keys]
            console.log
        }
        console.log(`${this.name}'s Total-> ${total}`)
    }
};
student.display()

