var currentTime = $("#currentDay"); // Parent

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // For every avaiable hour, I want to ...
  for (var i = 9; i < 18; i++) {
    let tempAppointment = localStorage.getItem(`hour-${i}`); // Get appointment from localStorage
    $(`#hour-${i}`).children("textarea").val(tempAppointment); // Fill text area with appointment value
  }

  // Gets current time's hour counter, in 24 hour format
  var now = dayjs().format("HH");
  for (var i = 9; i < 18; i++) {
    // All elements are default class "future", gets adjusted based on dayjs() time
    if (now > i) {
      $(`#hour-${i}`).removeClass("future").addClass("past");
    } else if (now == i) {
      $(`#hour-${i}`).removeClass("future").addClass("present");
    }
  }

  //On save click, save current note into localStorage
  $(".fa-save").on("click", function () {
    let buttonEl = $(this).parent(); // Clicks occur on child <i> element in button
    let hourID = $(buttonEl).parent().attr("id"); // Get ID of parent element of button
    let note = $(`#${hourID}`).children("textarea").val(); // get value in textarea
    localStorage.setItem(hourID, note); // push to localStorage
  });

  // Displays current time in header of document
  currentTime.text(dayjs().format("MMMM D, YYYY"));
});
