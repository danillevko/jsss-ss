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

const items = [
    { name: 'Футболка', price: 250, quantity: 2 },
    { name: 'Джинси', price: 800, quantity: 1 },
    { name: 'Кросівки', price: 1200, quantity: 1 }
  ];
  let calculateTotalCost = function(items = []){
    let total = 0;
    for(const {price, quantity} of items){
        total += price * quantity;
    }
    return total;
  }
 
  console.log(calculateTotalCost(items)); 
  