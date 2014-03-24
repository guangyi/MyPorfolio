//#F16c97';	
	var eye = $('.eye');
	var mouth = $('.mouths');
	//halfCircle( eye );
	halfCircle( mouth );
	var MoreAboutMe = function(){

		function textAnima(options){
			this.options = options;	
		};
		textAnima.prototype.i = 0;
		textAnima.prototype.done = false;
		textAnima.prototype.hover = function(){
			var previous;
			$('.option').mouseover(function(){
				console.log('here');
				previous = $(this).clone();

				console.log(previous.css('text-shadow'));
				$(this).css({
					'-moz-transition': 'none',
					'-webkit-transition': 'none',
					'-o-transition': 'color 0 ease-in',
					'transition': 'none',
					'opacity':'1',
					'text-shadow':'0 0 0px #000' 
				});
				$(this).children('span').css({
					'-moz-transition': 'none',
					'-webkit-transition': 'none',
					'-o-transition': 'color 0 ease-in',
					'transition': 'none',
					'opacity':'1',
					'text-shadow':'0 0 0px #ff0000'
				});
			}).mouseleave(function(){
				$(this).replaceWith(previous);
				console.log(previous.css('text-shadow'));
			});
		};
		textAnima.prototype.loopText = function(){
			var that = this;
			$(that.options[that.i]).children('span').css({'text-shadow':'0 0 0px #ff0000'});
			$(that.options[that.i]).delay(2500).css({
				'text-shadow':'0 0 0px #000' }).animate({
				opacity:'1'
			},{
				duration:800,
				complete:function(){
					that.i += 1;
					if( $(this).hasClass('like')){
						$(this).addClass('tada');
					}
					else{
						$(this).addClass('shake');
						$(this).css({'text-decoration':'line-through'});
					}
					if (that.i <= that.options.length){
						that.loopText();
					}
					else{
						that.done = true;
					}
				}
			});
		};
		
		var options = $('.option');
		var textAnimation = new textAnima(options);
		this.start = function(){
			textAnimation.loopText();
		};
		this.stop = function(){
			options.each(function(){
				//$(this).stop(true);//Can jump or shake even the opacity is 1 and no text-shadow
				$(this).css({
					'opacity':'1',
					'-moz-transition':'none',
					'-webkit-transition':'none',
					'-o-transition':'color 0 ease-in',
					'transition':'none',
					'text-shadow':'0px 0px 0px #000'
				});
				$(this).children('span').css({
					'-moz-transition':'none',
					'-webkit-transition':'none',
					'-o-transition':'color 0 ease-in',
					'transition':'none',
					'text-shadow':'0px 0px 0px #ff0000'
				});
			})
		};
	//textAnimation.hover();
	};
	$('.faces').click(function(){
		smileToUpset();
	})
	$(window).resize(function(){
		halfCircle(eye);
		//halfCircle(mouth);
		//eye.css("border-width",$('.like').width() * 2 / 100 +'px');
	});
var clearText = function(){
	//var options = $('.options').children();//get all the opstions
	var i = 0;
	//textAnima(options.first())

};

