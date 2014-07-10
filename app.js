var prompt = require('sync-prompt').prompt;
var chalk = require('chalk');

var play = [];
var home = [];
var school = [];

// ask user what they want to do
var response = prompt("(p)lay, (h)ome, (s)chool, or (q)uit? ");

if(response != 'p' || 'h' || 's' || 'q'){
    console.log( chalk.bold.red("You did not enter a valid selection. Try again. "))
}else{
// record response
  while(response != 'q'){
    var action = prompt("Enter action: ");

///// ADD SWITCH STATEMENT HERE:
    if(response === 'p'){
      play.push(action);
    }else if(response === 'h'){
      home.push(action);
    }else(response === 's'){
      school.push(action);
  } // end if else statement

  var response = prompt("(p)lay, (h)ome, (s)chool, or (q)uit? ");
  }// end while loop
}// end original if else statement

console.log("Your task lists for today are: ");
console.log( chalk.bold.blue.underline("Play: "));
for(var i =0; i < play.length; i++){
  console.log("   ", chalk.blue(play[i]));
}
console.log( chalk.bold.green.underline("Home:"));
for(var i =0; i < home.length; i++){
  console.log("   ", chalk.blue(home[i]));
}
console.log( chalk.bold.yellow.underline("School:"));
for(var i =0; i < school.length; i++){
  console.log("   ", chalk.yellow(school[i]));
}

// end program

