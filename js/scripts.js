$(document).ready(function() {
  var ninjaTurtle = parseInt(prompt("How many Ninja Turtles do you want to see?"));

  if (ninjaTurtle === 1) {
    $("#raphael").show();
  } else if (ninjaTurtle === 2) {
    $("#raphael, #michelangelo").show();
  } else if (ninjaTurtle === 3) {
    $("#raphael, #michelangelo, #donatello").show();
  } else if (ninjaTurtle === 4) {
    $("#raphael, #michelangelo, #donatello, #leonardo").show();
  } else if (ninjaTurtle > 4) {
    alert("Hey, Dummmy! There are only 4 Ninja Turtles!");
  } else if (ninjaTurtle < 1) {
    alert("What's wrong with you! Don't you like the world's most fiercest fighting team?");
  }

});
