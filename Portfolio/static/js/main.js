// setHightByWidth second parameter is the ratio: hight = ratio * width
$(document).ready(function(){
	/******************************************  animation when scroll to different page point onScroll.js ********************/
	$('.content').scrollTop(0);
	settings();
	$('.projects').hide();
	// want to only one slider but can start and stop under different condition
	// that's why put b here
	var blog = new Blog();
	var cloud = new cloudMove();
	animtOnScroll(blog, cloud);

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
		if(blog.AnimId()){
			$('.slider > ul').stop(true);
			blog.stop();
			blog.reset();
			blog.start();
		}
		cloud.stop(false);
		//cloud.adjust();
		cloud.float();
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