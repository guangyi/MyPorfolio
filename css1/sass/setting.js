$(document).ready(function(){
	var eyeWidth = $('.eye').width() / 2;
	$('.eye').height( eyeWidth);
	$('.eye').css('border-top-left-radius',eyeWidth+'px');
	$('.eye').css('border-top-right-radius',eyeWidth+'px');
	$('.eye').css('-webkit-border-top-left-radius',eyeWidth+'px');
	$('.eye').css('-webkit-border-top-right-radius',eyeWidth+'px');
	$('.eye').css('-moz-border-top-left-radius',eyeWidth+'px');
	$('.eye').css('-moz-border-top-right-radius',eyeWidth+'px');
})
