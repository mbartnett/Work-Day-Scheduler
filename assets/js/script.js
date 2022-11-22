// Variables
var today = dayjs();
var currentHour = dayjs().hour()
$('#currentDay').text(today.format('dddd, MMMM D, YYYY'));

// Functions
$(document).ready(function () {
  $('textarea').each(function (event) {
    var timeBlock = ($(this).parent('div').attr('id'))
    /*var img = $('<img>')
    img.attr('src', 'https://www.allaboutbirds.org/guide/assets/photo///304512481-480px.jpg')
    $('#' + timeBlock).append(img)*/
    var text = localStorage.getItem(timeBlock)
    $(this).val(text)
    if (timeBlock == currentHour) {
      $(this).addClass('present')
    } else if (timeBlock < currentHour) {
      $(this).addClass('past')
    } else {
      $(this).addClass('future')
    }
  })
  $('.saveBtn').on('click', function () {
    var text = $(this).siblings('textarea').val()
    var timeBlock = $(this).parent('div').attr('id')
    localStorage.setItem(timeBlock, text)
  })
})

