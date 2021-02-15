

// Variables to get current date and time from day.js
var currentDate = dayjs().format("dddd, MMMM D, YYYY")
$("#currentDay").text(currentDate);
var currentHour = parseInt(dayjs().format("H"))
console.log(currentHour);

// Array to hold the hours in a workday
var workHours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

$(document).ready(function(){
        
    // Function to create the workday planner
    function createPlanner(){
        // For loop to dynamically add rows and columns for hours and text area
        for(var i = 0; i < 9; i++){
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
            messageText.addClass(workHours[i]);
            messageText.addClass("col-10");
            
            // Conditional statement to check if the current time is in the past, present or future
            console.log(i+9 + " vs. " + currentHour)
            if (i+9 < currentHour){
                messageText.addClass("past");
            }else if (i+9 === currentHour){
                messageText.addClass("present");
            }else{
                messageText.addClass("future");    
            }
            console.log(messageText);
            // Creating the save button
            var saveButton = $("<button>");
            saveButton.addClass("saveBtn");    
            saveButton.addClass("col-1");
            saveButton.append('<i class="fas fa-save fa-lg"></i>');   
            
            timeBlocks.append(hourlyTime);
            timeBlocks.append(messageText);
            timeBlocks.append(saveButton);
            $(".container").append(timeBlocks);

            var key = workHours[i];
            var data = localStorage.getItem(key);
            messageText.val(data);
        }
    }
    createPlanner();
    // Save button on click function to save description to local storage
    $(".saveBtn").on("click", function(event){
        event.preventDefault();
        var value = $(this).siblings(".description").val();
        var hours = $(this).siblings(".hour").text();

        console.log("Key: " + hours + ", Value: " + value)
        
        localStorage.setItem(hours, value);
        

    })

    
    
});

