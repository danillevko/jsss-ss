// class PersonalComputer{
//     constructor(motherboard, videoCard, coolers){
//         this.videoCard = videoCard;
//         this.motherboard = motherboard;
//         this.coolers = coolers;
//     }
// }
// let a = new PersonalComputer('b', 5080, 'c')
// console.log(a);
// let d = new PersonalComputer('u', 50, 'o')
// console.log(d);

// class Person{
//     constructor(firstName, lastName){
//         this.firstName = firstName
//         this.lastName = lastName
//     }
//     getFullName(){
//         return this.firstName + this.lastName;
//     }
// }

// let john = new Person('John ', 'Doe');
// console.log(john.getFullName());

// class Rectangle{
//     constructor(width, height){
//         this.width = width
//         this.height = height
//     }
//     area(){
//         return this.width * this.height;
//     }
//     perimeter(){
//         let a = this.width + this.height;
//         return a * 2;
//     }
// }
// let getPerimeter = new Rectangle (10, 5);
// console.log(getPerimeter.perimeter());
// let getArea = new Rectangle (10, 5);
// console.log(getArea.area());

class Calculator{
    constructor(a, b){
        this.a = a;
        this.b = b;
    }
    add(a, b){
        return a+b
    }
    subtract(a, b){
        return a-b
    }
    multiply(a, b){
        return a*b
    }
    divide(a, b){
        return a/b
    }
}
const calculator = new Calculator();
console.log(calculator.add(2, 3)); // 5
console.log(calculator.subtract(5, 2)); // 3
console.log(calculator.multiply(2, 4)); // 8
console.log(calculator.divide(10, 2)); // 5
console.log(calculator.divide(10, 0));