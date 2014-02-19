// .toggle() has depreciated in current jQuery version
	// .one() is the function that will bind an event on the element
	// and this event can only be triggerd once per element per event type
	var firstClick = function(){
		$('.slice.left').stop().animate({
			//No space between 2 class name!
			// left are relative to its containing element.so 50% is enough
			left:'-48%'
			},{
				duration:2000,
			    queue:'left',
			}).dequeue('left');
		$('.slice.right').stop().animate({
					left:'48%'
				},{
					duration:2000,
					queue:'right'
				}).dequeue('right');
		$('#Blog >.row > .contentWrap > h1').one('click', secondClick);// !!!change to secondClick function after first Click.
	};
	var secondClick = function(){
		$('.slice.left').stop().animate({
			//No space between 2 class name!
				left:'0%'
			},{
				duration:2000,
			    queue:'left'
			}).dequeue('left');
		$('.slice.right').stop().animate({
					left:'0%'
				},{
					duration:2000,
					queue:'right1'
				}).dequeue('right1');
		$('#Blog >.row > .contentWrap > h1').one('click', firstClick);// !!!change back to secondClick function after first Click. Make it a circle
	};	