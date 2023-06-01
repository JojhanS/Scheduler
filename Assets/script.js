$(function () {
  //displays the current date and time
  var currentDay = dayjs().format('DD/MM/YYYY').toString();
  $('#currentDay').text(currentDay);

  // Retrieve saved data and set textarea values on page load
  $(".time-block").each(function () {
    var timeBlockId = $(this).attr("id");
    var userInput = localStorage.getItem(timeBlockId);
    $(this).find(".description").val(userInput);
  });

  // Save button event handler, saves what the user inputted as well as the timeblock id
  $(".saveBtn").on("click", function () {
    var timeBlockId = $(this).closest(".time-block").attr("id");
    var userInput = $(this).siblings(".description").val();
    localStorage.setItem(timeBlockId, userInput);
  });

  // Apply past, present, or future class to each time block by comparing to current hour
  $(".time-block").each(function () {
    var timeBlockId = $(this).attr("id");
    var currentHour = dayjs().format('H');
    var timeBlockHour = parseInt(timeBlockId.split("-")[1]);

    if (timeBlockHour < currentHour) {
      $(this).addClass("past");
    } else if (timeBlockHour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
});

