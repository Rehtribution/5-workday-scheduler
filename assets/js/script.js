//global variables
var now = moment().format('dddd, MMMM Do, YYYY');
var currentTime = moment().hours()
var timeBlock = $('.time-block')
var saveBtn = $(".saveBtn")

$("#currentDay").text(now)

setColor()
//this function designates the color of each timeblock section in accordance with the past, present, future classes
//cycles through each timeBlock setting the id from the html = var hour, compares it to the currentTime, adds/removes style classes as indicated 
function setColor() {
    timeBlock.each(function() {
        var hour = $(this).attr('id')

        if(currentTime > hour) {
            $(this).addClass('past')
        }
        else if(currentTime == hour) {
            $(this).removeClass('past')
            $(this).addClass('present')
        } else {
            $(this).removeClass('past')
            $(this).removeClass('present')
            $(this).addClass('future')
        }
    })
}

//eventlistner selects the "textarea" sibling to the clicked button assigning the key = "id" carried from the html and the value = "task" which is the user text input for that row
//it commits the id and task to local storage
saveBtn.on('click', function() {
    var id = $(this).attr('id')
    var task = $(this).siblings('textarea').val()
    localStorage.setItem(id, task)
    getTasks()
})

getTasks()

//retrieves the stored information by id 9-18 (the total length of the timeBlocks)
function getTasks() {
    for (var i = 9; i < 18; i++) {
        var currentTask = localStorage.getItem(i)
        $("#" + i).text(currentTask)
    }
}