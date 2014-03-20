// setHightByWidth second parameter is the ratio: hight = ratio * width
$(document).ready(function(){
	/******************************************  animation when scroll to different page point onScroll.js ********************/
	settings();
	$('.projects').hide();
	// want to only one slider but can start and stop under different condition
	// that's why put b here
	var b = new blog();
	animtOnScroll(b);
	var blogShotsOriLet = $('.wrapper.blogshots').css('left');
	//$('.wrapper.blogshots').one('click', firstClick);
	$('.topLeft').click(function(){
		$(this).animate({
			width:'100%',
			height:'100%'
		},1000);
	});
	loading();
	$(window).resize(function(){
		// set blog ul width
		console.log('id' +　b.AnimId());
		if(b.AnimId()){
			$('.slider > ul').stop(false,true);
			b.stop();
			var liWidth = $('#sliderLeft > ul > li').width();
			var length = $('#sliderLeft > ul > li').length;
			b.reset();
			b.start();
		}
		console.log('newid' +　b.AnimId());
		/*
		$('.slider > ul').each(function(){
			$(this).width( liWidth * length);
		}) */
	});
	/*$(window).resize(function(){
		// set blog ul width
		$('.slider > ul').stop(false,true);
		var liWidth = $('#sliderLeft > ul > li').width();
		console.log('width'+liWidth);
		var length = $('#sliderLeft > ul > li').length;
		console.log(length * liWidth);
		$('.slider > ul').each(function(){
			$(this).width( liWidth * length);
		}) 
	});*/
	//blogAnimation();
	//mouseHover();
	
});