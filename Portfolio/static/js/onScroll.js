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
	projects.first().addClass('rotateY').show('fast',function showNext(){
		// can name the complete function like this
		// so if can be called sometime
		$(this).next('.projects').addClass('rotateY').show('fast', showNext);//.next() calles the next sibling of matched element if no selector
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
var animtOnScroll = function(blog, cloud){
	var firstTimePrj = true;
	var enterBlog = true;
	var enterAboutMe = true;
	var leaveAboutMe = true;
	var firstTimeCont = true;
	
	var moreAboutMe = new MoreAboutMe();
	
	$('.content').scroll(function(){
		/******************************** Projects Page loading Animation **************/
		if($('#Experiments').offset().top <= $(window).height() * 0.7 && $('#Experiments').offset().top >= 0 && firstTimePrj){
			fristTimePrj = false;
			projectLoad();
		}
		if( $('#Blog').offset().top <= $(window).height() * 0.7  && $('#Blog').offset().top >= 0  && enterBlog ){
			// enterBlog = false now, so even the page is in the right section, no more new animation created.
			enterBlog = false;
			blog.start();
		}
		else if( ($('#Blog').offset().top > $(window).height() * 0.8  || $('#Blog').offset().top < -0.8 * $(window).height()) && !enterBlog) {
			if(blog.AnimId()){
				blog.stop();
			}
			enterBlog = true;
		}
		if($('#MoreAboutMe').offset().top <= $(window).height() * 0.3  && $('#MoreAboutMe').offset().top >= 0 && enterAboutMe){
			moreAboutMe.start();
			enterAboutMe = false;
			leaveAboutMe = false;
		}
		else if( ($('#MoreAboutMe').offset().top > $(window).height() * 0.8  || $('#MoreAboutMe').offset().top < -0.8 * $(window).height()) && !leaveAboutMe){
			//enterAboutMe = true;
			moreAboutMe.stop();
			leaveAboutMe = true;
		}
		if($('#Contact').offset().top >= $(window).height() * 0.96 && !firstTimeCont){
			firstTimeCont = true;
		// clearInterval when user is not on the contact page
		// stop the current animtion, go back to the end. otherwise I don't know why
		// the top property always gets lower-- maybe because the callback function is the current animation
		// so its previous point is +10px after the first animation. but end point is the very origin point of cloud top
		//$('.cloud').stop(true, true);// stop at end point
			cloud.stop();
		}
		else if($('#Contact').offset().top < $(window).height() * 0.7  && firstTimeCont){
		// when scroll to the contact page for the firstTime
		// has the slide effect
		//$('.cloud').stop();
			cloud.sliding();
		}
		if( $('#Contact').offset().top <= 10 && firstTimeCont){
		// the first time scroll to contact page, the cloud effect begins
		// if go back to this page, the effect is on, but it never stops
			firstTimeCont = false;
			var endPoint = cloud.getEndPoint();
			cloud.float(endPoint);
		}
		//cloudMove();// defined in cloudMove.js
		//flyin();
	});
}
