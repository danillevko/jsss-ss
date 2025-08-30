// const book = {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     year: 1960,
//     genre: "Fiction",
//     changeTitle(value){
//         this.title = value;
//     }
// };
// book.changeTitle('bob');
// console.log(book.title);

// const car = {
//     brand: 'corvete',
//     model: 'c7',
//     year: 2017,
//     color: 'red',
//     show(){
//         alert(`${this.brand}, ${this.model}, ${this.year}, ${this.color}`);
//     }
// }
// car.show();


const cart = {
    items: [],
    getItems() {
        return [...this.items];
    },
    add(product) {
        
    },
    remove(productName) {},
    clear() {
        this.items.length = 0;
    },
    countTotalPrice() {},
    increaseQuantity(productName) {},
    decreaseQuantity(productName) {},
  };