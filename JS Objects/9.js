//Object Constructor Function
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

const babel = new Book("Babel", "RF Kuang", 2025);
console.log(babel);

Book.prototype.display = function () {
  return `I love ${this.title} by ${this.author}!!`;
};
console.log(babel.display());

class Books {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  display(){
    return `I love ${this.title}!!`
  }
}
const yellow = new Books("Yellow", "someone", 2022)
console.log(yellow.display()) 