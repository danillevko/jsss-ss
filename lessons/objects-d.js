// const user = {
//   name: 'John',
//   age: 30,
//   email: 'john@example.com'
// }
// const car = {
//   make: 'Toyota',
//   model: 'Camry',
//   year: 2020,
//   features: ['power windows', 'rear camera', 'navigation'],
//   safety: {
//     airbags: true,
//     antilock_brakes: true,
//     stability_control: true
//   }
// }
// const movie = {
//   title: 'The Shawshank Redemption',
//   director: {
//     name: 'Frank Darabont',
//     nationality: 'American'
//   },
//   actors: ['Tim Robbins', 'Morgan Freeman'],
//   release_year: 1994,
//   ratings: {
//     imdb: 9.3,
//     rotten_tomatoes: 90
//   }
// }

// const {name, age, email} = user;
// console.log(name);

// const {make, model, year, features, safety:{airbags, antilock_breakes, stability_control}} = car;
// console.log(make, airbags);

// const {title, director:{name, nationality}, actors:[item1, item2], release_year, ratings:{imdb, rotten_tomatoes}} = movie;
// console.log(title, item1, imdb);

// const person = {
//     name: 'Nelli',
//     surname: 'Laroy',
//     age: 25
//   };
//   let personInfo = function({name, surname, age}){
//     return `Мене звати ${name} ${surname} і мені ${age}`;
//   }

// console.log(personInfo(person));


// const student = {
//     name: 'Bruce',
//     surname: 'Lee',
//     grades: [4, 5, 3]
//   };
//   let total = 0;
//   let calculateAverageGrade = function({grades}){
//     for(const grade of grades){
//         total += grade;
//     }
//     return total / grades.length;
//   }
 
//   console.log(calculateAverageGrade(student));

// const items = [
//     { name: 'Футболка', price: 250, quantity: 2 },
//     { name: 'Джинси', price: 800, quantity: 1 },
//     { name: 'Кросівки', price: 1200, quantity: 1 }
//   ];
//   let calculateTotalCost = function(items = []){
//     let total = 0;
//     for(const {price, quantity} of items){
//         total += price * quantity;
//     }
//     return total;
//   }
 
//   console.log(calculateTotalCost(items)); 
  
// const person = {
//   name: 'John',
//     emails: ['john@gmail.com', 'john@example.com', 'john123@yahoo.com']
// };
// const getFirstEmail = function({emails:[item1]}){
//   return item1;
// }

// console.log(getFirstEmail(person)); // 'john@gmail.com'


// const data = {
//     users: [
//       { name: 'John', age: 25 },
//       { name: 'Jane', age: 17 },
//       { name: 'Bob', age: 30 },
//       { name: 'Alice', age: 20 }
//     ]
//   };
//   const getAdultUsers = function({users = []}){
//     const newData = [];
//     for(const {name, age} of users){
//       if(age > 18){
//         newData.push({name, age});
//       }
//     }
//     return newData;
//   }
 
// console.log(getAdultUsers(data)); // [{ name: 'John', age: 25 }, { name: 'Bob', age: 30 }, { name: 'Alice', age: 20 }]