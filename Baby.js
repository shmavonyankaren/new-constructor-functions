function Person(name, age) {
    this.name = name;
    this.age = age;

    return this;
}

Person.prototype.compareAge = function(compareObj) {
    if(compareObj.age > this.age) {
        return `${compareObj.name} is older than me.`
    } else if(compareObj.age < this.age) {
        return `${compareObj.name} is younger than me.`
    } else {
        return `${compareObj.name} is the same age as me.`
    }
}

function Baby(name, age, favoriteToy) {
    this.name = name;
    this.age = age;
    this.favoriteToy = favoriteToy;
}

Baby.prototype = Person.prototype;

Baby.prototype.play = function() {
    return `Playing with ${this.favoriteToy}`
}

const kavin = new Baby("Kavin", 10, "Cars");
const alex = new Baby("Alex", 12, "Planes");
const anna = new Person("Anna", 40);

console.log(kavin.name); // Kavin   
console.log(kavin.age); // 10
console.log(kavin.play()); // Playing with Cars
console.log(kavin.favoriteToy); // cars
console.log(kavin.compareAge(alex)); // Alex is older than me.
console.log(anna.compareAge(kavin)); // Kavin is younger than me.