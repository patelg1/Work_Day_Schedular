$(document).ready(function(){
    var currentDate = dayjs().format("dddd, MMMM D, YYYY")
    $("#currentDay").text(currentDate);
    var currentHour = dayjs().format("H")

    var workHours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
        
    function createPlanner(){
        for(var i = 0; i < workHours.length; i++){
            var timeBlocks = $("<div>");
            timeBlocks.attr("id", i);
            timeBlocks.addClass("time-block");
            timeBlocks.addClass("row");    
            
            var hourlyTime = $("<p>");
            hourlyTime.addClass("hour");
            hourlyTime.addClass("col-1 pt-3");
            hourlyTime.text(workHours[i]);
            
            var messageText = $("<textarea>");
            messageText.addClass("description");
            messageText.addClass("col-10");
        
            if (i < currentHour){
                messageText.addClass("past");
            }else if (i === currentHour){
                messageText.addClass("present");
            }else{
                messageText.addClass("future");    
            }
            
            var saveButton = $("<button>");
            saveButton.addClass("saveBtn");    
            saveButton.addClass("col-1");
            saveButton.append('<i class="fas fa-save fa-lg"></i>');   
            
            timeBlocks.append(hourlyTime);
            timeBlocks.append(messageText);
            timeBlocks.append(saveButton);
            $(".container").append(timeBlocks);
        }
    }

    $(".saveBtn").click(function(){
        var timeId = $(this).attr(".time-block");
        var hourText = $(this).parent().children(".description");
        localStorage.setItem(timeId, hourText);

    })
    createPlanner();
});

