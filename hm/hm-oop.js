// 1
// class Acount{
//     constructor(login, email){
//         this.login = login;
//         this.email = email;
//     }
// }

// 2
// class User{
//     constructor(name, age, followers){
//         this.name = name
//         this.age = age
//         this.followers = followers
//     }
//     getInfo(){
//         console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`)
//     }
// }
// const mango = new User('Mango', 2, 20);
// mango.getInfo(); // User Mango is 2 years old and has 20 followers

// 3
// class Storage{
//     constructor(items){
//         this.items = items;
//     }
//     getItems(){
//         return this.items;
//     }
//     addItems(item){
//         this.items.push(item)
//     }
//     removeItems(item){
//         this.items.pop(item)
//     }
// }
// const storage = new Storage([
//  'Нанітоіди',
//  'Пролонгер',
//  'Залізні жупи',
//  'Антигравітатор',
// ]);

// const items = storage.getItems();
// console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

// storage.addItems('Дроїд');
// console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

// storage.removeItems('Пролонгер');
// console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]


// 4
