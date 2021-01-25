var currentDate = dayjs().format("dddd, MMMM D, YYYY")
$("#currentDay").text(currentDate);
var currentHour = dayjs().format("H")

for(var i = 9; i < 18; i++){
    var timeBlocks = $("<div>");
    timeBlocks.addClass("time-block");
    timeBlocks.addClass("row");    
    var hourlyTime = $("<p>");
    hourlyTime.addClass("hour");
    hourlyTime.addClass("col-1");
    hourlyTime.text(i);
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
    saveButton.addClass("col-1") ;
    
    timeBlocks.append(hourlyTime);
    timeBlocks.append(messageText);
    timeBlocks.append(saveButton);
    $(".container").append(timeBlocks);
}

