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


const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];
const allTags = tweets.reduce((total, {tags}) => {
    for(const tag of tags){
        if(total[tag]){
            total[tag]++
        } else{
            total[tag] = 1
        }
    }
    return total;
}, {})
console.log(allTags);