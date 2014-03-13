//#F16c97';
$(document).ready(function(){
	$('.option').mouseover(function(){
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
	}).mouseout(function(){
		$(this).css({
			'-moz-transition': 'none',
    		'-webkit-transition': 'none',
   			'-o-transition': 'color 0 ease-in',
    		'transition': 'none',
    		'opacity':'1',
    		'text-shadow':'0 0 30px #000' 
		});
		$(this).children('span').css({
			'-moz-transition': 'none',
    		'-webkit-transition': 'none',
   			'-o-transition': 'color 0 ease-in',
    		'transition': 'none',
    		'opacity':'1',
    		'text-shadow':'0 0 30px #ff0000'
		});
	});
	var eye = $('.eye');
	var mouth = $('.mouths');
	//halfCircle( eye );
	halfCircle( mouth );
	$('.option').each(function(){

		$(this).width($(this).children(''))
	})

	function textAnima(options){
		this.options = options;	
	};
	textAnima.prototype.i = 0;
	textAnima.prototype.loopText = function(){
		var that = this;
		$(that.options[that.i]).children('span').css({'text-shadow':'0 0 0px #ff0000'});
		$(that.options[that.i]).delay(2500).css({
			'text-shadow':'0 0 0px #000000' }).animate({
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
			}
		});
	};
	var options = $('.option');
	var textAnimation = new textAnima(options);
	textAnimation.loopText();

	
	$('.faces').click(function(){
		smileToUpset();
	})
	$(window).resize(function(){
		halfCircle(eye);
		//halfCircle(mouth);
		//eye.css("border-width",$('.like').width() * 2 / 100 +'px');
	});
	
});
var clearText = function(){
	//var options = $('.options').children();//get all the opstions
	var i = 0;
	//textAnima(options.first())

};

