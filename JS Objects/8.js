const car = {
    brand:"BMW",
    model:"911",
    year:"2021",
    engine:{
        sth:"sthsth",
        sth2:"sth02"
    }
} 

let shallowCopy = {...car}
let deepCopy = structuredClone(car)

console.log(shallowCopy)

shallowCopy.engine.sth = "sth1"
console.log(car)
console.log(shallowCopy)


deepCopy.engine.sth = "sth10"
console.log(car)
console.log(deepCopy)
