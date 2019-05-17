var app = angular.module('myapp', []);

app.controller('MainCtrl', function($scope) {
	$scope.items1 = ["C:/Users/Murali/Desktop/Angulartask2/images/1.jpg",
	"C:/Users/Murali/Desktop/Angulartask2/images/2.jpg",
	"C:/Users/Murali/Desktop/Angulartask2/images/3.jpg",
	"C:/Users/Murali/Desktop/Angulartask2/images/4.jpg",
	"C:/Users/Murali/Desktop/Angulartask2/images/5.jpg"];

  $scope.items2 = ["C:/Users/Murali/Desktop/Angulartask2/images/10.jpg",
	"C:/Users/Murali/Desktop/Angulartask2/images/9.jpg",
	"C:/Users/Murali/Desktop/Angulartask2/images/8.jpeg",
	"C:/Users/Murali/Desktop/Angulartask2/images/7.jpg",
	"C:/Users/Murali/Desktop/Angulartask2/images/6.jpg",
	"C:/Users/Murali/Desktop/Angulartask2/images/5.jpg",
	"C:/Users/Murali/Desktop/Angulartask2/images/4.jpg",
	"C:/Users/Murali/Desktop/Angulartask2/images/3.jpg",
	"C:/Users/Murali/Desktop/Angulartask2/images/2.jpg",
	"C:/Users/Murali/Desktop/Angulartask2/images/1.jpg"];
}).directive("owlCarousel", function() {
	return {
		restrict: 'E',
		transclude: false,
		link: function (scope) {
			scope.initCarousel = function(element) {
			  // provide any default options you want
				var defaultOptions = {
				};
				var customOptions = scope.$eval($(element).attr('data-options'));
				// combine the two options objects
				for(var key in customOptions) {
					defaultOptions[key] = customOptions[key];
				}
				// init carousel
				$(element).owlCarousel(defaultOptions);
			};
		}
	};
})
.directive('owlCarouselItem', [function() {
	return {
		restrict: 'A',
		transclude: false,
		link: function(scope, element) {
		  // wait for the last item in the ng-repeat then call init
			if(scope.$last) {
				scope.initCarousel(element.parent());
			}
		}
	};
}]);



// "C:\Users\Murali\Desktop\Angulartask2\images\10.jpg",
// 	"C:\Users\Murali\Desktop\Angulartask2\images\9.jpg",
// 	"C:\Users\Murali\Desktop\Angulartask2\images\8.jpeg",
// 	"C:\Users\Murali\Desktop\Angulartask2\images\7.jpg",
// 	"C:\Users\Murali\Desktop\Angulartask2\images\6.jpg",
// 	"C:\Users\Murali\Desktop\Angulartask2\images\5.jpg",
// 	"C:\Users\Murali\Desktop\Angulartask2\images\4.jpg",
// 	"C:\Users\Murali\Desktop\Angulartask2\images\3.jpg",
// 	"C:\Users\Murali\Desktop\Angulartask2\images\4.jpg",
// 	"C:\Users\Murali\Desktop\Angulartask2\images\3.jpg"