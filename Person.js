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

const p1 = new Person("Samuel", 24)
const p2 = new Person("Joel", 36)
const p3 = new Person("Lily", 24)
p1.compareAge(p2) // ➞ "Joel is older than me."
p2.compareAge(p1) // ➞ "Samuel is younger than me."
p1.compareAge(p3) // ➞ "Lily is the same age as me."
console.log(p1.compareAge(p2)) // ➞ "Joel is older than me."
console.log(p2.compareAge(p1)) // ➞ "Samuel is younger than me."
console.log(p1.compareAge(p3)) // ➞ "Lily is the same age as me."