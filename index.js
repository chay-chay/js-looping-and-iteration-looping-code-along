// Code your solutions in this file
function writeCards (name, event){
    let thankYouCards = []
    for (let i = 0;  i < name.length; i++){
        thankYouCards.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }
    return thankYouCards
}


function countDown( startingNumber ) {
    while ( startingNumber > 0 ) {
      console.log( startingNumber );
      startingNumber -= 1;
    }
    console.log( startingNumber );
  }

