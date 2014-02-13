'use strict';
var portfolio = angular.module('portfolio',["ngCookies"]);


var portfolio = angular.module("portfolio",["ngCookies"], function($interpolateProvider){
	$interpolateProvider.startSymbol("{$");
	$interpolateProvider.endSymbol("$}");
});

function getWinHeight(){
		return window.innerHeight;
	}
function handleResize(){
		return getWinHeight();
	}
portfolio.run(function($http, $cookies){
	$http.defaults.headers.common['X-CSRFToken'] = $cookies['csrftoken'];
});

portfolio.controller('frameworkCtrl',['$scope','$location', function($scope, $location){
	$scope.navNames = ['About','Intro', 'Projects','Blog','MoreAboutMe','Contact'];
	//isActive is to verify the link is activated or not.
	$scope.isActive = function(viewLocation){
		var active = (viewLocation === $location.path());
		return active;
	}
}]);


portfolio.controller( 'contentCtrl',['$scope','$location','$window', function($scope,$location, $window){
	$scope.screenHeight = getWinHeight();//$(window).height(); //screen.availHeight;
	$window.onresize = function(){ handleResize();}
	// watch the change in URL?
	// first elementget current URL
	$scope.$watch(function(){
		return $location.path();
		}, function(value){
			// when the document is ready, call function below
			angular.element(document).ready(function(){
				if(value){
					// replace the '/' in the URL with '#''
					var idToScroll = value.replace('/','#');
					// How to calculate how much to scroll in a scroll area
					// Here the offset is changing.
						var offset = $(idToScroll).offset().top;
						var contentScroll = $('.content').scrollTop();
						var upToTop = contentScroll + offset;
						$('.content').animate({
							scrollTop: upToTop
						},"slow");
					//}
				}
			});	
	});
}]);
portfolio.controller('projectsCtrl',['$scope',function($scope){
	$scope.projects = {
					// currently input here in JS file, later when more projets presented,
					//will get them from DB and can "lord more" to build single page application
						'car':
							{'caption':     'My dream car',
							 'tag':         'css3',
							 'description': 'This is the dream car I created by CSSssssss3,This is the dream car I created by CSSsssss3,This is the dream car I created by CSSssssss3',
							 'img_url':     'static/images/car.JPG'
							},
						'bouncing_ball_Y':{
							'caption':     'Bouncing Ball on Y axis',
							'tag':         'Canvas',
							'description': 'This is the practice on Html5 Canvas. A bouncing ball on Y axis,This is the practice on Html5 Canvas. A bouncing ball on Y axis',
							 'img_url':     'static/images/bouncing_ball_Y.JPG'
							},
						'bouncing_ball_XY':{
							'caption':     'Bouncing Ball on X and Y axis',
							'tag':         'Canvas',
							'description': 'This is the practice on Html5 Canvas. A bouncing ball on X and Y axis,This is the practice on Html5 Canvas. A bouncing ball on X and Y axis',
							 'img_url':     'static/images/bouncing_ball_XY.JPG'
							},
						'image_slider':{
							'caption':     'Image slider with pagers',
							'tag':         'Javascript',
							'description': 'Image slider with no plugin, only Javascript,Image slider with no plugin, only Javascript,Image slider with no plugin, only Javascript',
							'img_url':     'static/images/image_slider.JPG'
						}
					};
}]);
portfolio.controller('contactCtrl',['$scope','emailService', function($scope, emailService){
	$scope.icons = {
		'facebook':{
			'img_url':'static/images/facebook.png',
			'link'   :'https://www.facebook.com/guangyi.zhou.1'
		},
		'linkedin':{
			'img_url':'static/images/linkedin.png',
			'link'   :'http://www.linkedin.com/profile/view?id=142806547&trk=nav_responsive_tab_profile_pic'
		},
		'github':{
			'img_url':'static/images/github.png',
			'link'   :'https://github.com/guangyi'
		}
	};
	$scope.emailData = {};
	$scope.clicked = false;
	//console.log(contactForm);
	// reference angular form in JS, use $scope.formName
	//$scope.errorName = contactForm.name.error.required && !contactForm.name.$pristine;
	//$scope.errorEmail = $scope.contactForm.email.$invalid && !$scope.contactForm.email.$pristine;
	//$scope.errorMessage = $scope.contactForm.message.$invalid && !$scope.contactForm.message.$pristine;
	$scope.sendEmail = function(){
		$scope.clicked = true;
		if ($scope.contactForm.$valid){
			//console.log($scope.emailData.name);
			emailService.sendEmail($scope.emailData);
			$scope.clicked = false;
		}
	};
}]);
/*
//How to srcoll page with angular directive
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
				element.addClass('active');
			})
		}
	}
})
*/
