class Car {
  //   constructor
  constructor(color, gears, manufacturer) {
    this.color = color;
    this.gears = gears;
    this.manufacturer = manufacturer;
  }

  move() {
    console.log(this.manufacturer + "has moved");
  }

  increaseSpeed() {}

  getInfo() {
    console.log(this);
  }
}

const volvo = new Car("red", 5, "Volvo");

volvo.getInfo(); //red volvo 5
toyota.getInfo(); //black toyota 4
