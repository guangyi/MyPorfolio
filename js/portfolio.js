var portfolio = angular.module('portfolio',[]);

portfolio.directive('myScrollTo', function(){
	return{
		restrict:'A',
		link: function(scope, element, attrs){
			var idToScroll = attrs.href;
			//var temp = $("#header").outerHeight();
			element.on('click', function() {
				$('body').animate({
					scrollTop: $(idToScroll).offset().top
				},"slow");
			})
		}
	}
});
portfolio.directive('mouseWheel', ['$scope', function($scope){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// cont­rol­ler: function($scope, $element, $attrs, $transclue) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, element, attrs) {
			if (element.addEventListener){
				element.addEventListener('mousewheel', function(){
					alert(attrs.id);
				});
			//FireFox
				element.addEventListener('DOMMouseScroll', function(){

				});
			}
			//IE9, Chrome, Safari, Opera
			else{
				element.attachEvent('onmousewheel',function(){

			});
			}
			
		}
	};
}]);
portfolio.controller('testCrtl', ['$scope', '$window',function($scope){
	$scope.screenHeight = screen.availHeight;
}]);