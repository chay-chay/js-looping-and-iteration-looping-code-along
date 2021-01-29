// Code your solutions in this file
function writeCards(name, event) {
  let thankYouCards = [];
  for (let i = 0; i < name.length; i++) {
    thankYouCards.push(
      `Thank you, ${name[i]}, for the wonderful ${event} gift!`
    );
  }
  return thankYouCards;
}


function countDown(startingNumber){
for (let i = startingNumber; i > -1; i--){
  console.log(i);
}
}

// Or use the below code
// function countDown(startingNumber) {
//   while (startingNumber > 0) {
//     console.log(startingNumber);
//     startingNumber -= 1;
//   }
//   console.log(startingNumber);
// }
