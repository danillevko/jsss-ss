const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

// const playersCount = players.map(names => names.name);
// console.log(playersCount);

// const increasePoints = players.map(point => point.points * 1.1);
// console.log(increasePoin);

// const increaseHours = players.map(ids =>{
//     if(ids.id === 'player-1'){
//       return { ...ids ,timePlayed: ids.timePlayed + 10}
//     }
//     return ids;
// })
// console.log(increaseHours);

// const playerActive = players.filter(active => active.online);
// console.log(playerActive);

// const playerActive = players.filter(active => !active.online);
// console.log(playerActive);

// const hardPlayers = players.filter(hour => hour.timePlayed > 250);
// console.log(hardPlayers);

// const idFinder = players.find(ids => ids.id === 'player-5');
// console.log(idFinder);

// const nameFinder = players.find(names => names.name === 'Kiwi');
// console.log(nameFinder);

// const hoursTest = time => time.timePlayed > 200;
// console.log(players.some(hoursTest));

// const activeTest = active => active.online;
// console.log(players.every(activeTest));



// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 31];
// const evenNumbers = numbers.filter(even => even % 2 === 0);
// console.log(evenNumbers);


// const people = [
//   { name: 'John', age: 32, occupation: 'programmer' },
//   { name: 'Jane', age: 26, occupation: 'teacher' },
//   { name: 'Mike', age: 42, occupation: 'engineer' },
//   { name: 'Emily', age: 17, occupation: 'designer' }
// ];
// const ageTest = people.filter(age => age.age > 18);
// console.log(ageTest);


const array1 = [1, 2, 3, 44, 4, 5, 6, 6, 7];
const array2 = [5,12, 3, 14, 4, 5, 6, 6, 7];
const nums = function(array1, array2){
  allnums = array1.concat(array2);
  const b = allnums.filter((a, index, array) =>
    array.indexOf(a) === index
  );
  return b;
}
console.log(nums(array1, array2));