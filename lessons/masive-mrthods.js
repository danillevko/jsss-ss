// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };

// const totalSalary = Object.values(salary).reduce((total, nums) => total + nums, 0);
// console.log(totalSalary);


// const cart = [
//   { label: 'Apples', price: 100, quantity: 2 },
//   { label: 'Bananas', price: 120, quantity: 3 },
//   { label: 'Lemons', price: 70, quantity: 4 },
// ];
// const totNums = cart.reduce((total, elements) => total + elements.quantity, 0);
// console.log(totNums);


// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];
// const allTags = tweets.reduce((total, {tags}) => {
//     for(const tag of tags){
//         if(total[tag]){
//             total[tag]++
//         } else{
//             total[tag] = 1
//         }
//     }
//     return total;
// }, {})
// console.log(allTags);

// const products = [
//     { name: 'Product 1', price: 100, quantity: 5 },
//     { name: 'Product 2', price: 50, quantity: 10 },
//     { name: 'Product 3', price: 200, quantity: 2 },
//     { name: 'Product 4', price: 50, quantity: 5 }
//   ];
//   products.sort((a,b)=>{
//     if(a.price !== b.price){
//         return b.price - a.price;
//     }
//     if(a.quantity !== b.quantity){
//         return a.quantity - b.quantity;
//     }
//   });
//   console.log(products)


//   const events = [
//     { name: 'Event 1', date: '10/02/2023' },
//     { name: 'Event 2', date: '15/03/2023' },
//     { name: 'Event 3', date: '01/01/2023' },
//     { name: 'Event 4', date: '01/02/2023' }
//   ];
 
//   events.sort((a, b) => {
//     const dateA = new Date(a.date.split('/').reverse().join('-'));
//     const dateB = new Date(b.date.split('/').reverse().join('-'));
//     return dateB - dateA;
//   });
 
//   console.log(events);

const items = [
    { name: 'Item A', popularity: 5 },
    { name: 'Item C', popularity: 2 },
    { name: 'Item D', popularity: 3 },
    { name: 'Item B', popularity: 5 }
  ];
items.sort((a, b) => {
    if(a.popularity !== b.popularity){
        return b.popularity - a.popularity;
    }
    if(a.name !== b.name){
        return a.name - b.name;
    }
})
console.log(items);