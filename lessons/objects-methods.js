// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: false },
//     { name: 'Ajax', online: false },
//   ];
//   const namme = function(friends, nname){
//     for(const elements of friends){
//         if(elements.name === nname){
//             return nname;
//         } else{
//             return `${nname} couldn't found`;
//         }
//     }
//   }
// console.log(namme(friends, 'Mango'));

// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: false },
//     { name: 'Ajax', online: false },
//   ];
//   let gettingNames = [];
//   let getAllNames = function(friends){
//     for(const objects of friends){
//       gettingNames.push(objects.name);
//     }
//   }
//   getAllNames(friends);
//   console.log(gettingNames);

//  const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: false },
//     { name: 'Ajax', online: false },
//   ];
//   let getOnlineFriends = function(friends){
//     for(objects of friends){
//       if(objects.online === true){
//         console.log(objects.name);
//       }
//     }
//   }
//   getOnlineFriends(friends);

  //  const friends = [
  //   { name: 'Mango', online: false },
  //   { name: 'Kiwi', online: true },
  //   { name: 'Poly', online: false },
  //   { name: 'Ajax', online: false },
  // ];
  // let getOnlineFriends = function(friends){
  //   for(objects of friends){
  //     if(objects.online === false){
  //       console.log(objects.name);
  //     }
  //   }
  // }
  // getOnlineFriends(friends);

//      const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: false },
//     { name: 'Ajax', online: false },
//   ];
//   let online = [];
//   let offline = [];
//   let getFriendsByStatus = function(friends){
//     for(objects of friends){
//       if(objects.online === true){
//         online.push(objects.name);
//       } else{
//         offline.push(objects.name);
//       }
//     }
//   }

//  getFriendsByStatus(friends);
//  console.log(`online: ${online}`);
//   console.log(`offline: ${offline}`);



const products = [
  {name: 'apple', price: 3, category: 'fruit', stock: 3},
  {name: 'potato', price: 5, category: 'vegetable', stock: 10},
  {name: 'pineapple', price: 1, category: 'fruit', stock: 1},
]
let productsFunction = function(products, category){
  let total = 0;
  for(object of products){
    if(object.category === category){
      total += object.stock * object.price;
    }
  }
  return total;
}
console.log(productsFunction(products, 'vegetable'));

