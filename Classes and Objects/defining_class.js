class SmartPhone{
    constructor(displaySize,operatingSystem,price){
        this.screen = displaySize;
        this.os = operatingSystem;
        this.price = price;
    }
}
class Polygon {
    constructor(arr) {
        this.sideOne = arr[0]
        this.sideTwo = arr[1]
        this.sideThree = arr[2]
    }

    perimeter() {
        return (this.sideOne + this.sideTwo + this.sideThree);
    }
}

let triangle = new Polygon([3, 4, 5]);

console.log(triangle.perimeter());