// 1
// const bankAcc = {
//     ownerName: 'bob',
//     accNumber: 123,
//     balance: 10,
//     deposit(sum){
//         this.balance += sum;
//         alert(`on ur bank acc u get ${sum} dollars. now u have ${this.balance} dollars`);
//     },
//     withdraw(sum){
//         if(sum <= this.balance){
//             this.balance -= sum;
//             alert(`from ur bank acc u withdraw ${sum}. now u have ${this.balance} dollars`)
//         } else{
//             alert('no money on ur acc dumb ass. AHHAHAHAHAHAHAAHAHA');
//         }
//     }
// }


// 2
// const weather = {
//     temperature: Number(prompt('whats the temperature?')),
//     humidity: '50%',
//     windSpeed: '2 km/hr',
//     method(){
//         if(this.temperature <= 0){
//             alert('temperature is below than 0');
//         } else{
//             alert('temperature is greater than 0');
//         }
//     }
// }
// weather.method();

// 3
// const user = {
//     name: 'bob',
//     email: 'bob123@gmail.com',
//     password: 1234567,
//     login(rightEmail, rightPassword){
//         if(rightEmail === this.email && rightPassword === this.password){
//             alert('come on in');
//         } else{
//             alert('get the fuck out of here');
//         }
//     }
// }
// user.login('bob123@gmail.com', 1234567);

// 4
const movie = {
    title: 'bob',
    director: 'obo',
    year: 2025,
    rating: Number(prompt('whats the rating of this movie?')),
    method(){
        if(this.rating >= 8){
            return console.log('true');
        } else{
            return console.log('false');
        }
    }
}
movie.method()