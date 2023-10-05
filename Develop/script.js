var currentTime = $("#currentDay"); // Parent

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // Store entry in local data
  $(".fa-save").on("click", function () {
    var saveNoteID = $(this).parent().parent().attr("id"); // GETS HOUR-# ID
    var saveNote = $(`#${saveNoteID}`).children(".description").text(); // how to get value ?
    localStorage.setItem(saveNoteID, saveNote);
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  var now = dayjs().format("HH");
  for (var i = 9; i < 18; i++) {
    // All elements are default class "future", gets adjusted based on dayjs() time
    if (now > i) {
      $(`#hour-${i}`).removeClass("future").addClass("past");
    } else if (now == i) {
      $(`#hour-${i}`).removeClass("future").addClass("present");
    }
  }

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  // TODO: Add code to display the current date in the header of the page.
  currentTime.text(dayjs().format("MMMM D, YYYY"));
});
