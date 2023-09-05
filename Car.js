function Car(model, milesPerGallon) {
    this.tank = 0;
    this.odometter = 0;
    this.model = model;
    this.milesPerGallon = milesPerGallon;

    return this;
}

Car.prototype.fill = function(gallons) {
    this.tank += gallons;
    return this.tank;
}

Car.prototype.drive = function(distance) {
    if(this.tank / this.milesPerGallon > distance) {
        this.odometter += distance;
        this.tank -= distance * this.milesPerGallon;
        return this.odometter;
    }  else if (this.tank / this.milesPerGallon < distance) {
        this.odometter += this.tank / this.milesPerGallon;
        this.tank = 0;
        return `I ran out of fuel at ${this.odometter} miles!`
    } else {
        this.odometter += distance;
        this.tank = 0;
        return `I ran out of fuel at ${this.odometter} miles!`   
    }
}

const mazda = new Car("Mazda", 10);

console.log(mazda.drive(10));
console.log(mazda.fill(110));
console.log(mazda.drive(10));
console.log(mazda.drive(10));
console.log(mazda.fill(10));
console.log(mazda.drive(12));