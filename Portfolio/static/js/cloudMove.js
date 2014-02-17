//#1
var moveDuration = 20000;
var firstTime = true;
var intervalID=[];	
var cloudMove = function(){
	
	var startPoint = 0.7;// start when contact page possess 30% of the window height
	if($('#Contact').offset().top >= $(window).height() * 0.96 && !firstTime){
		// clearInterval when user is not on the contact page
		// stop the current animtion, go back to the end. otherwise I don't know why
		// the top property always gets lower-- maybe because the callback function is the current animation
		// so its previous point is +10px after the first animation. but end point is the very origin point of cloud top
		//$('.cloud').stop(true, true);// stop at end point
		clearInterval(intervalID[0]);
		clearInterval(intervalID[1]);
		$('.cloud').stop(true, true);
		$('.cloud').css('left','0');
		firstTime = true;
	};
	if($('#Contact').offset().top < $(window).height() * startPoint  && firstTime){
		// when scroll to the contact page for the firstTime
		// has the slide effect
		//$('.cloud').stop();
		console.log('case2');
		$('.cloud').stop(true, true);
		var pageHight = $(window).innerHeight() * startPoint;
		var vertical = $('#Contact').offset().top;
		var ratio =  Math.abs(1 - vertical / pageHight);
		var moveDistance = $('.clouds').width() * 0.9;// match the space on the right as form
		var left = moveDistance * ratio;
		var cloudWidth = $('.cloud').width();
		var endPoint = moveDistance - cloudWidth;
		if (left <= endPoint){
			$('.cloud').css('left', left + 'px');
		}
	};
	if( $('#Contact').offset().top <= 10 && firstTime){
		// the first time scroll to contact page, the cloud effect begins
		// if go back to this page, the effect is on, but it never stops
			firstTime = false;
			console.log('case3');
		// if use setTimeout(), then there is a waiting time at the first time it runs
		// can use immediately execute function or 
		// can call back current function when animation is done, like the day I do it here
		// setInterval will execute the function again and again, setTimeout only execute once
			upDown( $('.cloud') );
			forwardBack( $('.cloud'), endPoint);
			intervalID[0] = setInterval(function(){
				upDown( $('.cloud'));
			},2000);
				
			intervalID[1] = setInterval(function(){
				forwardBack( $('.cloud'), endPoint);
			}, moveDuration * 2 );
				
	}
};

var forwardBack = function(obj, endPoint){
	// cloud move back and force
	// queue and dequeue to let 'backForce' and 'updown' work sync
	obj.animate({
		'left': 0
	}, 
	{
		queue:'horizontal',
		duration:moveDuration,
		easing:'linear',
		complete:function(){
			$(this).animate({
				'left':endPoint
			}, 
			{
				queue:'horizontal',
				duration:moveDuration,
				easing:'linear'
			});
		} 
	}).dequeue('horizontal');
};
var upDown = function(obj){
	// cloud move up and down
	obj.animate({
		'top': '+=20'
	}, 
	{
		queue:'vertical',
		duration:1000,
		complete:function(){
			$(this).animate({
				'top': '-=20'
			}, 
			{	queue:'vertical',
				duration:1000
			});
		}
	}).dequeue('vertical');
};






