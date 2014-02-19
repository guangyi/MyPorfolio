// setHightByWidth second parameter is the ratio: hight = ratio * width
$(document).ready(function(){
	/******************************************  animation when scroll to different page point onScroll.js ********************/
	settings();
	$('.projects').hide();
	animtOnScroll();
	$('#Blog >.row >.contentWrap > h1').one('click', firstClick);
	
});