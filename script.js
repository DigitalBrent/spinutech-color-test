// Function for handling clicks on the first row (Add the shapes to the second row).
$(".main-row .circle").on("click", function () {
  // The instructions didn't say anything about limiting the amount of shapes in the second row, but in order to avoid someone theoretically creating a huge DOM by adding a bunch of elements, I am limiting the second row to 5 shapes.
  if ($(".second-row > div").length >= 5) {
    $(".second-row").children().last().remove();
  }

  $(".second-row").prepend($(this).clone().addClass("shape")).html();
});

// Function for handling clicks on the second row (Move clicked shape to start of row - first detach it to preserve the element in a variable, then remove the clicked on element, then prepend the element from the variable.
$(".second-row").on("click", ".shape", function () {
  var x = $(this).detach();
  $(this).remove();
  $(".second-row").prepend(x).html();
});
