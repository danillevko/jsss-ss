const friends = [
    { name: 'Mango', online: false },
    { name: 'Kiwi', online: true },
    { name: 'Poly', online: false },
    { name: 'Ajax', online: false },
  ];
  const namme = function(friends, nname){
    for(const elements of friends){
        if(elements.name === nname){
            return nname;
        } else{
            return `${nname} couldn't found`;
        }
    }
  }
console.log(namme(friends, 'Mango'));