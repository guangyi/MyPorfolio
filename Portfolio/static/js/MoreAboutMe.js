
$(document).ready(function(){
	//clearText();
	function textAnima(options){
		this.options = options;	
	};
	textAnima.prototype.i = 0;
	textAnima.prototype.loopText = function(){
		var that = this;
		$(that.options[that.i]).delay(2500).css({
			'text-shadow':'0 0 0px #F16c97'}).animate({
			'opacity':'1'
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
					console.log('i=' + that.i);
					that.loopText();
				}
			}
		});
	};
	var options = $('.option');
	var textAnimation = new textAnima(options);
	textAnimation.loopText();
	
});
var clearText = function(){
	//var options = $('.options').children();//get all the opstions
	
	console.log('optionLength'+options.length);
	var i = 0;
	//textAnima(options.first())

};

