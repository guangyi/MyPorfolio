// function like variable is executed when it's been called.
// anonymouse function will been excute when document is ready
function getDirection(event, obj){
	//this is the function to get mouse enter/out direction
	//By detecting the mouse position on which area-- 
	// inside(entering) or outside(out) the target element
	//event.pageX and event.pageY to get the mouse position
	var mouseX = event.pageX;
	var mouseY = event.pageY;
	var elementX = obj.offset().left;//JS: obj.offsetLeft;
	var elementY = obj.offset().top;//JS: obj.offsetTop;
	var elWidth = obj.outerWidth();
	var elHeight = obj.outerHeight();
	var relativeX = mouseX - elementX;
	var relativeY = mouseY - elementY;
	// learned from stack overflow--how to 
	var x = (relativeX - (elWidth / 2) * (elWidth > elHeight ? (elHeight / elWidth) : 1));
	var y = (relativeY - (elHeight / 2) * (elHeight > elWidth ? (elWidth / elHeight) : 1));
        
    var d = Math.round( Math.atan2(y, x) / 1.57079633 + 5 ) % 4;
    return d;
};

var addClasses = function(direction, obj, state){
	switch( direction ){
		case 0: obj.addClass(state + '_top'); break;
		case 1: obj.addClass(state + '_right'); break;
		case 2: obj.addClass(state + '_bottom'); break;
		case 3: obj.addClass(state + '_left'); break;
	}
};
var removeClasses = function(obj){
	var removePattern = / (in|out|rotate)_[a-zA-Z_]+/g;
	obj.each(function(){
		var currentClasses = $(this).attr('class');
		var removeName = currentClasses.match(removePattern);
		if (removeName != null){
			$(this).removeClass(removeName[0]);
		}
	});
	// regular expression to match current class name
	// that includeing state( in/out)
	
};
$(document).ready(function(){
	// Both these two style works!!!
	// mouseleave and mouseenter is different with mousehover and mouseout
	// mouserleave and mouseenter won't affect the child of the animated element.
	$('.filter').mouseenter(function(event){
		var d = getDirection(event, $(this));
		removeClasses($(this));
		addClasses(d, $(this), 'in');
	});
	$('.aboutRectangle').mouseleave(function(event){
		var d = getDirection(event, $(this));
		removeClasses($(this).children('.filter'));
		addClasses(d, $(this).children('.filter'), 'out');
	});
	$('.description').mouseenter(function(event){
		var d = getDirection(event, $(this));

		switch(d){
			case 0:
			case 1: 
				var shelter = $(this).children( '.proShelter.top' );
				var descrpt = $(this).children( '.descrpt.down' );
				removeClasses( $(this).children() );
				addClasses( d, shelter, 'in' );	
				addClasses( d, descrpt, 'rotate_in' );
				break; 
			case 2: 
			case 3:
				var shelter = $(this).children( '.proShelter.down' );
				var descrpt = $(this).children( '.descrpt.top' );
				removeClasses( $(this).children() );	
				addClasses( d, shelter, 'in' );
				addClasses( d, descrpt, 'rotate_in' );
				break;			
		}
		
	});
	$('.description').mouseleave(function(event){
		var d = getDirection(event, $(this));
		switch(d){
			case 0:
			case 1:
				var shelter = $(this).children( '.proShelter.top' );
				var descrpt = $(this).children( '.descrpt.down' );
				removeClasses( $(this).children() );	
				addClasses( d, shelter, 'out' );	
				addClasses( d, descrpt, 'rotate_out' );
				break; 
			case 2:
			case 3:
				var shelter = $(this).children( '.proShelter.down' );
				var descrpt = $(this).children( '.descrpt.top' );
				removeClasses( $(this).children() );	
				addClasses( d, shelter, 'out' );
				addClasses( d, descrpt, 'rotate_out' );
				break;	
		}
		//$(this).siblings('.descpt.top').css('z-index','3');
	});/*
	$('.description').mouseleave(function(event){
		addClasses(event, $(this).children('.proShelter'), 'out');
	});*/
	/*
	$('.filter').each(function(){
		$(this).mouseover(function(){
			removeClasses(event, $(this));
			addClasses(event, $(this), 'in');
		});
		$(this).mouseout(function(){
			removeClasses(event, $(this));
			addClasses(event, $(this), 'out');
		});
	});
	var pos = new position();
	$('#Blog').find('.content_wrap').mousemove(function(event){
		var currnX = event.pageX;
		var currnY = event.pageY;
		var prevX = pos.getPrevX();
		pos.storePosition(currnX,currnY);
		var result = currnX - prevX;
		moveBakground(result, $(this));
	});*/
});
function position(){
	// this is a constructor.
	this.prevX = 0;
	this.prevY = 0;
	this.storePosition = function(prevX, prevY){
			this.prevX = prevX;
			this.prevY = prevY;
		};
	this.getPrevX = function(){
			return this.prevX;
		}
};
var moveBakground =  function(num, obj){
	if (num > 0 ){
		obj.css('background-position', num/5 + '%');
	}
	else{
		obj.css('background-position', Math.abs(num)/5 + '%');
	}
}
var compare = function(currnX, prevX){
	var diff =currnX - prevX;
	if (diff > 0){
		return ('right');
	}
	if(diff < 0 ){
		// move towoard left
		return ('left');
	}
}

