// .toggle() has depreciated in current jQuery version
	// .one() is the function that will bind an event on the element
	// and this event can only be triggerd once per element per event type
	var firstClick = function(){
		var wrapperLeft = $('#slicesWrapper').offset().left;
		var wrapperRight = $(window).width() - $('#slicesWrapper').offset().left- $('#slicesWrapper').width();
		console.log('wa' + wrapperRight);
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

		$(this).stop().animate({
			left:'-100%'
		},{
			duration:2200,
			queue:'btnleft',
			step:function(now, fx){
				if ($(this).offset().left <= wrapperLeft - 24 * 1.1){
					$(this).stop('btnleft');
				}
			}
		}).dequeue('btnleft');

		$('#BlogLink').stop().animate({
			right:'-100%'
		},{
			duration:2200,
			queue:'btnright',
			step:function(now, fx){
				var right = $(window).width() - $(this).offset().left - $(this).width()
				console.log('right' + right);
				if(right <= wrapperRight + 3){
					$(this).stop();
				}
			}
		}).dequeue('btnright');
		$(this).one('click', secondClick);// !!!change to secondClick function after first Click.
	};
	var secondClick = function(){
		$('.slice.left').stop().animate({
			//No space between 2 class name!
				left:'0%'
			},{
				duration:2000,
			    queue:'left1'
			}).dequeue('left1');

		$('.slice.right').stop().animate({
					left:'0%'
				},{
					duration:2000,
					queue:'right1'
				}).dequeue('right1');
		$(this).stop().delay(800).animate({
			left:'0'
		},{
			duration:1030,
		});

		$('#BlogLink').stop().delay(800).animate({
			right:'0'
		},{
			duration:1050,
		})
		$(this).one('click', firstClick);// !!!change back to secondClick function after first Click. Make it a circle
	};	
