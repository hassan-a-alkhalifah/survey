$(document).ready(function() {
  $("form#survey").submit(function(event) {
  event.preventDefault();
  var food = $("#food").val();
  var wine = $("input:radio[name=wine]:checked").val();
  var name = $("#name-input").val();
  $("#food1").text(food);
  $("#wine").text(wine);
  $("#name").text(name);
  });
});
