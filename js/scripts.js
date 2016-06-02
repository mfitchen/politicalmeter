$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age > 18) {
    $("#over-18").show();
  } else if (age === 18) {
    $("#age-18").show();
    alert("Welcome to the world of voting!");
  } else {
    $("#under-18").show();
  }
});
