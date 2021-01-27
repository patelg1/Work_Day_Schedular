// Variables to get current date and time from day.js
var currentDate = dayjs().format("dddd, MMMM D, YYYY")
$("#currentDay").text(currentDate);
var currentHour = dayjs().format("H")

$(document).ready(function(){
    // Array to hold the hours in a workday
    var workHours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
     
    // Function to create the workday planner
    function createPlanner(){
        // For loop to dynamically add rows and columns for hours and text area
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
            
            // Conditional statement to check if the current time is in the past, present or future
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
    // Save button on click function to save description to local storage
    $(".saveBtn").click(function(event){
        event.preventDefault();
        var timeId = $("messageText")[i].value;
        
        localStorage.setItem("timeId", timeId);

    })

    function getText(){
        $("messageText")[i].value = localStorage.getItem("timeId");
    }
    createPlanner();
    getText();
});

