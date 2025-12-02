// nested object

const student = {
  name: "Sam",
  address: { city: "Kathmandu", ward: 7 },
  marks: { math: 85, science: 90 },
  getFullAddress:function(){
    console.log(`${this.address.city}-${this.address.ward}, Nepal`)
  },
  calcTotal:function(){
    let total=0
    for(keys in this.marks){
        total += this.marks[keys]
    }
    console.log(total)
  },
};

student.getFullAddress()
student.calcTotal()


