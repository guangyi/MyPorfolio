// setHightByWidth second parameter is the ratio: hight = ratio * width
$(document).ready(function(){
	/******************************************  animation when scroll to different page point onScroll.js ********************/
	settings();
	$('.projects').hide();
	animtOnScroll();
	var blogShotsOriLet = $('.wrapper.blogshots').css('left');
	console.log(blogShotsOriLet);
	$('.wrapper.blogshots').one('click', firstClick);
	$('.topLeft').click(function(){
		$(this).animate({
			width:'100%',
			height:'100%'
		},1000);
	});
	//mouseHover();
	
});