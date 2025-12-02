const car = {
    brand:"BMW",
    model:"911",
    year:"2021",
    start:function(){
        console.log(`${this.brand} + ${this.year}`)
    }
} 

console.log(car.brand)
console.log(car["year"])
car.start()