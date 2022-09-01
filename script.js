//current date
var todayDate = moment().format('MMMM Do, YYYY');
$("#currentDay").html(todayDate);

//this is the button that once 'clicked' inputs to local storage
$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })
    
    //tracks the time and keeps up to date
    function timeTracker() {
  
        var timeNow = moment().hour();

        //finds the current time and color codes the past present and future times.
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

     // pulls data from local storage
    for (var i = 9; i < 18; i++) {
        $(`#hour${i} .description`).val(localStorage.getItem(`hour${i}`));
      };

    timeTracker();
})