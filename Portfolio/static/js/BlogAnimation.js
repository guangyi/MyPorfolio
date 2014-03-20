// .toggle() has depreciated in current jQuery version
	// .one() is the function that will bind an event on the element
	// and this event can only be triggerd once per element per event type
	var firstClick = function(){
		var wrapperLeft = $('#slicesWrapper').offset().left;
		var wrapperRight = $(window).width() - $('#slicesWrapper').offset().left- $('#slicesWrapper').width();
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
			left:'-50%'
		},{
			duration:2700,
			queue:'btnleft',
			step:function(now, fx){
				if ($(this).offset().left <= wrapperLeft - 24 * 1){
					$(this).stop();
				}
			}
		}).dequeue('btnleft');

		$('.wrapper.bloglink').stop().animate({
			right:'-50%'
		},{
			duration:2700,
			queue:'btnright',
			step:function(now, fx){
				var right = $(window).width() - $(this).offset().left - $(this).width()
				if(right <= wrapperRight - 0.5 * 16){
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
			left:'27%'
		},{
			duration:1030,
		});

		$('.wrapper.bloglink').stop().delay(800).animate({
			right:'28%'
		},{
			duration:1050,
		})
		$(this).one('click', firstClick);// !!!change back to secondClick function after first Click. Make it a circle
	};
	var mouseHover = function(){
		$('.tag').mouseenter(function(event){
				$(this).animate({
					top:'-=25'
				},300);
			}).mouseleave(function(){
				$(this).animate({
					top:'+=25'
				},300);
			});
	};
/*
	function blogSlider(){
		this.wid = $('.slider > ul > li').width();
		console.log(this.wid);

	}
	blogSlider.prototype.liWidth = this.wid;
	blogSlider.prototype.liWidth = $('.slider > ul > li').first().width();
	blogSlider.prototype.len = $('#sliderLeft > ul > li').length;
	blogSlider.prototype.current = 1;// current item displaying
	blogSlider.prototype.slider = $('.slider > ul');
	blogSlider.prototype.id = '';
	blogSlider.prototype.init = function(){
		var liWidth = this.liWidth;
		console.log('why' + liWidth);
		var len = this.len;
		this.slider.each( function(){
			// add first and last element as clone element, so the slider could be a loop
			var first = $(this).children('li:first');
			var last =  $(this).children('li:last');
			// user before: prepend() will append element as the first child element of matched elements.
			first.before(last.clone(true));// ; clone(true) clone data 
			last.after(first.clone(true));
			$(this).width(liWidth * (len + 2));
			$(this).css('left', -1 * liWidth);
		});
	};
	blogSlider.prototype.autoSlide = function(){
		var blogSliderThis = this;
		console.log('testWidth' + this.liWidth);
		blogSliderThis.id = setInterval( function slide(){
			//console.log($('.slider > ul').css('left'));
			console.log('testWidth' + blogSliderThis.liWidth);
			if( 0 < blogSliderThis.current && blogSliderThis.current <= blogSliderThis.len ){
				var distance = -1 * blogSliderThis.liWidth;
				blogSliderThis.move( distance);
				blogSliderThis.current += 1;
			}
			else if( blogSliderThis.current === 0 || blogSliderThis.current > blogSliderThis.len){
				blogSliderThis.toEnd();
			};
		}, 4000);
	};
	blogSlider.prototype.move = function(distance){
		this.slider.each(function(){
			$(this).animate({
				left:'+=' + distance
			}, 3000);
		});
	}
	blogSlider.prototype.toEnd = function(){
		this.current = (this.current === 0)? this.len:1;
		var distance = -1 * this.liWidth * this.current;
		this.slider.each(function(){
			$(this).css('left', distance );
		});
	};
	blogSlider.prototype.btnContrl = function(){
		this.slider.stop();
		clearInterval(this.id);
		var direction = ($(this).attr('id') == 'prev')? 1:-1;
		var distance = direction * this.liWidth;
		this.move(distance);
		this.autoSlide();
	}
	var blogAnimation = function(){
		var bs = new blogSlider();
		bs.init();
		bs.autoSlide();
		$('.btnCtrl').on('click', function(){
			bs.btnContrl();
		});
	};
	
	

	/*
	var autoSlide = function(){

	}
	var id = setInterval(function(){
		console.log('waaaa'+$('#slicesWrapper > ul ').css('left'));

		if (current )

		$.each($('.slider > ul'), function(){
			if (parseInt( $(this).css('left'), 10) >)
		} )

		if (parseInt($('.slider > ul'),10).each(function(){
			$(this).css('left')
		}).css)
		if (parseInt($('#slicesWrapper > ul ').css('left'), 10) >= (-2) * width ){
			$('#slicesWrapper > ul ').animate({
				left:'-=' + width
			}, 3000);
		}
		else{
			$('#slicesWrapper > ul ').animate({
				
			});
			clearInterval(id);
		};

		if(parseInt($('#sliderLeft > ul ').css('left'), 10) >= (-2) * width ){
			$('#sliderLeft > ul ').animate({
				left:'-=' + width
			},3000);
		}
		else{
			$('#sliderLeft > ul ').stop();
			clearInterval(id);
		};
		
		if(parseInt($('#sliderRight > ul ').css('left'), 10) >= (-2) * width ){
			$('#sliderRight > ul ').animate({
				left:'-=' + width
			},3000);
		}
		else{
			$('#sliderRight > ul ').stop();
			clearInterval(id);
		}
	}, 6000);*/
var blog = function(){
	
	function blogSlider(){
	}
	blogSlider.prototype.liWidth = $('.slider > ul > li').first().width();
	blogSlider.prototype.len = $('#sliderLeft > ul > li').length;// how mamy li children
	blogSlider.prototype.current = 1;// current item displaying
	blogSlider.prototype.slider = $('.slider > ul');
	blogSlider.prototype.id = '';
	blogSlider.prototype.init = function(){
		this.current = 1;
		this.id = '';
		var liWidth = this.liWidth;
		var len = this.len;
		this.slider.each( function(){
			// add first and last element as clone element, so the slider could be a loop
			var first = $(this).children('li:first');
			var last =  $(this).children('li:last');
			// user before: prepend() will append element as the first child element of matched elements.
			first.before(last.clone(true));// ; clone(true) clone data 
			last.after(first.clone(true));
			$(this).width(liWidth * (len + 2));// set ul width
			$(this).css('left', -1 * liWidth);
		});
	};
	blogSlider.prototype.autoSlide = function(){
		var blogSliderThis = this;
		this.id = setInterval( function slide(){
			var direction = -1 ;
			blogSliderThis.animation(direction);
		}, 9000);
	};
	blogSlider.prototype.animation = function(direction){

		var that = this;
		console.log(this.current);
		console.log(that.len+'len');
		if ( 0 < that.current && that.current <= that.len){
			that.move(direction);
			that.current += direction * -1;
		}
		else if( that.current === 0  || that.current > that.len){
			that.toEnd();
			that.animation(direction);
		}
	}
	blogSlider.prototype.move = function(direction){
		var that = this;
		that.slider.each(function(){
			$(this).animate({
				left:'+=' + direction * that.liWidth
			}, 3000);
		});
	};
	blogSlider.prototype.toEnd = function(){
		this.current = (this.current === 0)? this.len:1;
		var distance = -1 * this.liWidth * this.current;
		this.slider.each(function(){
			$(this).css('left', distance );
		});
	};
	blogSlider.prototype.btnContrl = function(event){
		var that = this;
		var direction = (event.target.id === 'prev')? 1: -1;
		if( $('.slider > ul').is(':not(:animated)')){
			//stop current interval and restart
			clearInterval(that.id)
			that.animation(direction);
		}
		else{
			//stop current interval and restart
			that.slider.stop(false,true);
			clearInterval(that.id);
		}
		that.autoSlide();
	};
	blogSlider.prototype.reset = function(){
		var that = this;
		$('.slider > ul > li').width($('.slider').width());
		this.liWidth = $('#sliderLeft > ul > li').first().width();
		this.slider.each( function(){
			$(this).width(that.liWidth * (that.len +　2));
			$(this).css('left',-1 * that.current * that.liWidth);
			console.log(that.current + 'current');
		});
		console.log('newWidth' +　this.liWidth);
	}
	var bs = new blogSlider();
	bs.init();

	this.start = function(){
		// only init when create a new blog object.
		bs.autoSlide();
		// if put it in the start function, it will be called multitimes!
		// maybe should unbind it in stop function!
		$('.btnCtrl').on('click', function(event){
			bs.btnContrl(event);
		});
	};
	this.reset = function() {
		bs.reset();
	}
	this.AnimId = function(){
		return bs.id;
	}
	this.stop = function(){
		clearInterval(bs.id);
		$('.btnCtrl').unbind('click');
	}
	
	
};




