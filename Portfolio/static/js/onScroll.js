function flyin(){
	var winHeight = $(window).height();
	$('.effOnScroll').each(function(){
		
		// this = each effOnScroll unit
		$(this).children().each(function(){
			// this = each child element of effOnScroll unit
			var eleOffsetTop = $(this).offset().top;
			var ratio = eleOffsetTop / winHeight;
			var xPos = ratio * 100;
			var opacity = 1 - ratio;
			var rotateX, rotateY;
			if (opacity >= 0.6){opacity = 1;}
			if (xPos < 20){
				xPos = 20;
			}
			else if(xPos > 100){
				xPos = 100;
			}
			//3d rotates around its X/Y/Z-axis
			if (0 <= ratio && ratio <= 1 ){
				rotateX = ratio * 180;
				rotateY = ratio * 120;
				if (rotateX <= 90){
					rotateX = 0;
				}
				if (rotateY <= 40){
					rotateY = 0;
				}
			}
			$('.hi').css('margin-left','-'+xPos+'%');
			$('.hi-right').css('margin-right', '-'+xPos+'%');
			$('.opacity').css('opacity',opacity);
			if($(this).hasClass('rotate')){
				$(this).css('-webkit-transform', 'rotate3d(0,1,0, '+ rotateY + 'deg');
			}
			
	});
		});
}
var projectLoad = function(){
	var projects = $('.projects');//select all the project unit on the page
	var i = 0;
	projects.first().show('fast',function showNext(){
		// can name the complete function like this
		// so if can be called sometime
		$(this).next().show('fast', showNext);//.next() calles the next sibling of matched element if no selector
	});
}
function has3D(){
	//this function is to detect weather the browser has 3d effect or not
	//Copied from stackoverflow. need to study it later.
	var el = document.createElement('p'),
    has3d,
    transforms = {
        'webkitTransform':'-webkit-transform',
        'OTransform':'-o-transform',
        'msTransform':'-ms-transform',
        'MozTransform':'-moz-transform',
        'transform':'transform'
    };
    // Add it to the body to get the computed style
    document.body.insertBefore(el, null);
 
    for(var t in transforms){
        if( el.style[t] !== undefined ){
            el.style[t] = 'translate3d(1px,1px,1px)';
            has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);
        }
    }
    document.body.removeChild(el);
    return (has3d !== undefined && has3d.length > 0 && has3d !== "none");
}
var animtOnScroll = function(){
	$('.content').scroll(function(){
		/******************************** Projects Page loading Animation **************/
		var firstTimePrj = true;
		if($('#Projects').offset().top <= $(window).height() * 0.7 && firstTimePrj){
			fristTimePrj = false;
			projectLoad();
		};
		cloudMove();// defined in cloudMove.js
		//flyin();
	});
}
