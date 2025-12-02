const car = {
    brand:"BMW",
    model:"911",
    year:2021,
    start:function(){
        console.log(`${this.brand} + ${this.year}`)
    }
} 

car.color="red"
car.year = 2020

delete car.model
console.log(car)