$(document).ready(function() {
  $(".clickable").click(function() {
    $("#hide").fadeToggle();
    $("#show").fadeToggle();

  });
});

$(function() {
  $(".fonts").click(function() {
    $(".fade").fadeIn();

  });
});

$(function() {
  $("#fonts2").click(function() {
    $(".fade2").fadeIn();

  });
});
