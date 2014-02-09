var duration = 1000;
var faceNumber = 4;
var mouthDelay = 1500;
$(document).ready(function(){
	initialFaces(faceNumber);
	var eye = $('.eye');
	var mouth = $('.mouth');
	halfCircle( eye );
	halfCircle( mouth );
	$('.faces').click(function(){
		smileToUpset();
	})
	$(window).resize(function(){
		halfCircle(eye);
		//halfCircle(mouth);
		//eye.css("border-width",$('.like').width() * 2 / 100 +'px');
	});

});
var smileToUpset = function(){
	$('.left').addClass('upsetEye').delay(1000).animate(
	//setWidTopLeft function will return an object containning those
	//three properties and set the value properly
		setWidTopLeft("10%", "10%", "27%"),
		{
			duration:500,
			step:function(now, fx){
				// notice the sequence of these two variables
				// first one is the current number
				// second one is an object. fx.elem refer to the animated element.
				setHalfCirlebyWidth(fx.prop, $(this));
			}
		}
	);
	$('.right').addClass('upsetEye_right').delay(1000).animate(
		setWidTopLeft("10%", "10%", "50%"),
		{
			duration:500,
			step:function(now, fx){
				setHalfCirlebyWidth(fx.prop, $(this));
			}
		}
	);
	$('.mouth').addClass('upsetMouth').animate(
		setWidTopLeft("20%", "80%", "10%"),
		{
			duration:duration,
			step:function(now, fx){
				// step function to get width after every animation step
				setHalfCirlebyWidth(fx.prop, $(this));
			},
		}
	);
	$('.teeth > li').animate({
		opacity:"0"
	},
	100
	);
};
var upsetToSmile = function(){
	$('.upsetEye.left').removeClass('upsetEye').addClass('smileEye').animate(
		setWidTopLeft("10%", "14%", "30%"),
		{
			duration:duration,
			step:function(now, fx){
				setHalfCirlebyWidth(fx.prop, $(this));
			}
		}
		);
	$('.upsetEye_right.right').addClass('smileEye_right').removeClass('upsetEye').animate(
		setWidTopLeft("10%", "14%", "55%"),
		{
			duration:duration,
			step:function(now, fx){
				setHalfCirlebyWidth(fx.prop, $(this));
			}
		}
	);
	$('.upsetMouth').removeClass('upsetMouth').addClass('smileMouth').animate(
		setWidTopLeft("55%", "55%", "21%"),
		{
			duration:duration,
			step:function(now, fx){
				setHalfCirlebyWidth(fx.prop, $(this));
			}
		}
	);
};
var cssSetting = function(obj, attr, num){
	//attr is a string, num is a string
	obj.css(attr, num);
	obj.css('-webkit-' + attr, num);
	obj.css('-moz-' + attr, num);
	obj.css('-o-' + attr, num);
	obj.css(attr, num);
};
var setHightByWidth = function(obj, ratio){
	// hight related to width;
	obj.each(function(){
		var width = $(this).width();
		$(this).height(width * ratio);
	});
}
var halfCircle = function(obj){
	//Half circle: hight = 0.5 * height;
	//circle radius = width;
	obj.each(function(){
		circleWidth = $(this).width();
		setHightByWidth($(this), 0.5);
		cssSetting( $(this), 'border-top-left-radius', circleWidth + "px" );
		cssSetting( $(this), 'border-top-right-radius', circleWidth + "px" ); 
	});
};
var setHalfCirlebyWidth = function(attr, obj){
	if (attr == 'width'){
		halfCircle( obj );
	}
};
var setWidTopLeft = function(width, top, left){
	var position = {
		width: width,
		top: top,
		left: left
	}
	return position;
};
var initialFaces = function(faceNumber){
	// fixednumber
	var number = 10;
	var j=0
	/*for(var i = 0; i < faceNumber.length; i++){
		number += faceNumber[i]
	}*/

	var eachFaceWidth = $('.faces').width() / number;
	//setup outerWidth, so each face's width is 
	$('.smile').outerWidth(eachFaceWidth);
	setHightByWidth($('.smile') , 1);
	// select one smile element, otherwise, $('.smile').length will be 2,4,8...
	var smile = $('.smile.changeFace');
	$('.faces').each(function(){
		//.children() will only search one-level down of the children elementsm
		// while find() can search several level down
		for(var len = $(this).children().length; len < faceNumber;len++ ){
			// pay attention to select class element,cause it could be a lot
			// and need to be specific to one of them, not all of them
			smile.clone().appendTo($(this));
		}
	});
}
var setRadiusByHeight =  function(obj, ratio){
	var height = obj.height();
	var radius = height * ratio;
	cssSetting(obj, 'border-radius', parseInt(radius));

}
/******************************************** projects settings *******************************/
// setHightByWidth second parameter is the ratio: hight = ratio * width
$(document).ready(function(){
	setHightByWidth($('.projects'), 1.3);
	setHightByWidth($('.description'), 1);
	setHightByWidth($('.caption'),0.3);
	setHightByWidth($('.dialogBox'), 1);
	setRadiusByHeight($('.cloud'), 0.5);
	setHightByWidth($('.cloudPart1'), 1);
	setHightByWidth($('.cloudPart2'), 1);
})