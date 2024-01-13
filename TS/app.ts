class Vehicle {
  color: string;
  noOfWheels: number;
  maxSpeed: number;
  isAvailableInMarket: boolean;

  constructor(
    color: string,
    noOfWheels: number,
    maxSpeed: number,
    isAvailableInMarket: boolean
  ) {
    this.color = color;
    this.noOfWheels = noOfWheels;
    this.maxSpeed = maxSpeed;
    this.isAvailableInMarket = isAvailableInMarket;

    console.log("this.color", this.color);
  }

  sayMyProperties() {
    console.log(this.color, this.maxSpeed, this.noOfWheels);
  }
}

const v1 = new Vehicle("red", 4, 100, true);
const v2 = new Vehicle("red", 4, 100, true);
v1.sayMyProperties();
