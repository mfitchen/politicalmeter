$(document).ready(function() {
  $("form#political-beliefs").submit(function(event) {
    var government = parseInt($("select#government").val());
    var security = parseInt($("select#security").val());
    var charity = parseInt($("select#charity").val());
    var result = (government + security + charity);

    if (result === 0) {
      $("#ideological-range").text("Very Liberal");
    } else if (result === 1) {
      $("#ideological-range").text("Liberal");
    } else if (result === 2) {
      $("#ideological-range").text("Conservative");
    } else if (result === 3) {
      $("#ideological-range").text("Very Conservative");
    }

    $("#ideology").show();

    event.preventDefault();

  });
});
