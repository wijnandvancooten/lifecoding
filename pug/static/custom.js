$(document).ready(function() {
  console.log('DOM loaded')
  $('#guestbook').on('submit', function(event){
    console.log(event.target[0].value)
    event.preventDefault()
    let formdata = {
      name: event.target[0].value,
      massage: event.target[1].value
    }
    $.post('/api', formdata ,function(response){
      $('#feedback').html (response)
    })
  })
})
