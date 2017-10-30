// Business Logic
function Place(location, landmark, time, discription) {
  this.location = location;
  this.landmark = landmark;
  this.time = time;
  this.discription = discription;
}

Place.prototype.sillyLandmark = function() {
  return this.landmark + " シ ";
}



// User Interface Logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var inputLocation = $("#location-input").val();
    var inputLandmark = $("#landmark-input").val();
    var inputTime = $("#time-input").val();
    var inputDiscription = $("#discription-input").val();
    var newPlace = new Place(inputLocation, inputLandmark, inputTime, inputDiscription);

    $("#output-list").show().append('<li class="place">' + newPlace.location + "</li>");


    $(".place").last().click(function() {
      $("#output-card").show();
      $(".place-output").text(newPlace.location);
      $(".landmark-output").text(newPlace.sillyLandmark());
      $(".time-output").text(newPlace.time);
      $(".discription-output").text(newPlace.discription);
    });
  });
});
