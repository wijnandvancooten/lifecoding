$(document).ready(function(){
	console.log('dom had leaded')
	$('p').hide()
	$('button').click(function(){
		console.log('h1 has been clicked')
		$('.showHide').slideDown(5000).hide(5000).slideDown(5000).rotate(+5)

	})

})
