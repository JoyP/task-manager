var prompt = require('sync-prompt').prompt;

var play = [];
var home = [];
var school = [];

// ask user what they want to do
var response = prompt("(p)lay, (h)ome, (s)chool, or (q)uit? ");

// record response
while(response != 'q'){
  var action = prompt("Enter action: ");

  if(response === 'p'){
    play.push(action);
  }else if(response === 'h'){
    home.push(action);
  }else if(response === 's'){
    school.push(action);
  }else{
    console.log("You did not enter a valid selection. Try again." )
  } // end if else statement

var response = prompt("(p)lay, (h)ome, (s)chool, or (q)uit? ");
}// end while loop

console.log("Your task lists for today are: ");
console.log("Play: ");
for(var i =0; i < play.length; i++){
  console.log("   ", play[i]);
}
console.log("Home:");
for(var i =0; i < home.length; i++){
  console.log("   ", home[i]);
}
console.log("School:");
for(var i =0; i < school.length; i++){
  console.log("   ", school[i]);
}

// end program

