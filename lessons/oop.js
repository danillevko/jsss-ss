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

// class Calculator{
//     constructor(a, b){
//         this.a = a;
//         this.b = b;
//     }
//     add(a, b){
//         return a+b
//     }
//     subtract(a, b){
//         return a-b
//     }
//     multiply(a, b){
//         return a*b
//     }
//     divide(a, b){
//         return a/b
//     }
// }
// const calculator = new Calculator();
// console.log(calculator.add(2, 3)); // 5
// console.log(calculator.subtract(5, 2)); // 3
// console.log(calculator.multiply(2, 4)); // 8
// console.log(calculator.divide(10, 2)); // 5
// console.log(calculator.divide(10, 0));


// class Animal{
//     constructor(name){
//         this.name = name;
//     }
// }
// class Dog extends Animal{
//     constructor(breed, name){
//         super(name);
//         this.breed = breed;
//     }
// }
// const myDog = new Dog('Labrador Retriever', 'Buddy');
// console.log(myDog);

// class Animal{
//     makeSound(){
//         return 'a';
//     }
// }
// class Cat extends Animal{
//     makeSound(){
//         return 'meow';
//     }
// }
// const cat = new Cat();
// console.log(cat.makeSound);


// class Animal{
//     constructor(name){
//         this.name = name
//     }
//     speak(){
//         return 'meow';
//     }
// }
// class Dog extends Animal{
//     speak(){
//         return 'Bark'
//     }
// }
// const animal1 = new Animal('Lion');
// console.log(animal1.speak()); // Animal sound

// const dog1 = new Dog('Pug');
// console.log(dog1.speak()); // Bark!


// class Product{
//     constructor(name, price, discount){
//         this.name = name;
//         this.price = price;
//         this.discount = discount;
//     }
//     getDiscountPrice(){
//         let percent = this.discount / 100;
//         let total = this.price * percent;
//         return this.price - total;
//     }
// }
// const product1 = new Product('Phone', 500, 10);
// console.log(product1.getDiscountPrice()); // 450


// class Shape{
//     constructor(color){
//         this.color = color;
//     }
//     draw(){
//         return 'a';
//     }
// }
// class Circle extends Shape{
//     constructor(color, radius){
//         super(color);
//         this.radius = radius;
//     }
//     draw(){
//         return 'b';
//     }
// }
// const myCircle = new Circle('red', 5);
// console.log(myCircle.radius)
// console.log(myCircle.color)


// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// }
// class Employee extends Person{
//     constructor(name, age, position){
//         super(name, age);
//         this.position = position;
//     }
// }
// const john = new Employee("John", 32, "programmer");
// console.log(john); // "John is a programmer and is 32 years old"



class Book{
    constructor(title, author, price){
        this.title = title
        this.author = author
        this.price = price
    }
}
class Bookstore extends Book{
    constructor(books, title, author, price){
        super(title, author, price)
        this.books = [];
    }
    addBook(book){
        this.books.push(book);
    }
    removeBook(book){
        this.books.pop(book);
    }
    listBooks(){
        return this.books;
    }
}
const myBookstore = new Bookstore();

const book1 = new Book('The Catcher in the Rye', 'J.D. Salinger', 10);
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 12);
const book3 = new Book('1984', 'George Orwell', 8);

myBookstore.addBook(book1);
myBookstore.addBook(book2);
myBookstore.addBook(book3);

console.log(myBookstore.listBooks()); // виведе всі книги у книжковому магазині

myBookstore.removeBook(book2);