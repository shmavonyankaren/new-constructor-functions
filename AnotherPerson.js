function Person(name, age) {
    this.stomach = [];
    this.name = name;
    this.age = age;

    return this;
}

Person.prototype.eat = function(food) {
    if(this.stomach.length < 10) {
        this.stomach.push(food);
        return "Eaten";
    }   
    return "Full";
}

Person.prototype.poop = function() {
    this.stomach.length = 0;
    return "Stomach is empty";
}

Person.prototype.toString = function() {
	return `${this.name}, ${this.age}`;
}

const p = new Person("Samuel", 24);

console.log(p.eat("Pizza"));
console.log(p.eat("Burger"));
console.log(p.eat("Apply"));
console.log(p.eat("Pizza"));
console.log(p.eat("Burger"));
console.log(p.eat("Apply"));
console.log(p.eat("Pizza"));
console.log(p.eat("Burger"));
console.log(p.eat("Apply"));
console.log(p.eat("Pizza"));
console.log(p.eat("Burger"));
console.log(p.eat("Apply"));
console.log(p.poop());
console.log(p.eat("Pizza"));
console.log(p.eat("Burger"));
console.log(p.eat("Apply"));
console.log(p.toString());