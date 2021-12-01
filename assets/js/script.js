var now = moment().format('dddd, MMMM Do, YYYY');
var currentTime = moment().hours()
var timeBlock = $('.time-block')
var saveBtn = $(".saveBtn")

$("#currentDay").text(now)

setColor()

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

saveBtn.on('click', function() {
    var id = $(this).attr('id')
    var task = $(this).siblings('textarea').val()
    localStorage.setItem(id, task)
    getTasks()
})

getTasks()

function getTasks() {
    for (var i = 9; i < 18; i++) {
        var currentTask = localStorage.getItem(i)
        $("#" + i).text(currentTask)
    }
}