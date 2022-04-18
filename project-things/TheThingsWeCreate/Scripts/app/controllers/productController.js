var playerParent = "";
var currentAlbum = "album2";
var myAppModule = angular.module('myApp');

myAppModule.controller('ProductController', ['$scope', '$window', '$rootElement', '$location', '$timeout', '$interval', '$sce', '$routeParams', 'defaultService',
function ($scope, $window, $rootElement, $location, $timeout, $interval, $sce, $routeParams, defaultService) {
    document.title = "TheThingsWeCreate: NEW PRODUCT";
    $scope.$parent.style = function () { return { 'margin': '0', 'padding': '0', 'background': '#98643d url(http://TheThingsWeCreate.com/Content/images/bg.png) repeat top left' }; }

    $scope.$parent.ClearMenuItemClasses();
    if ($scope.$parent.isMainMenuCollapsed == false)
        $scope.$parent.isMainMenuCollapsed = true;

    $scope.$parent.SetSelectedMenuClass($location.path());

    //$timeout(callAtTimeout, 3000);

    $scope.newProductImages = defaultService.getHomeImages();
    $scope.currentImage = 1;

    $scope.links = [
      { src: "../../Content/images/WithEmoji/With Mask//Welcome-2016.png", alt: "", caption: "" },
      { src: "../../Content/images/WithEmoji/With Mask/Page-01-2016.png", alt: "", caption: "" },
      { src: "../../Content/images/WithEmoji/With Mask/Page-02-2016.png", alt: "", caption: "" },
      { src: "../../Content/images/WithEmoji/With Mask/Page-03-2016.png", alt: "", caption: "" },
      { src: "../../Content/images/WithEmoji/With Mask/Page-04-2016.png", alt: "", caption: "" },
      { src: "../../Content/images/WithEmoji/With Mask/Page-05-2016.png", alt: "", caption: "" },
      { src: "../../Content/images/WithEmoji/With Mask/Page-06-2016.png", alt: "", caption: "" },
      { src: "../../Content/images/WithEmoji/With Mask/Page-07-2016.png", alt: "", caption: "" },
      { src: "../../Content/images/WithEmoji/With Mask/Page-08-2016.png", alt: "", caption: "" },
      { src: "../../Content/images/WithEmoji/With Mask/Bike-aligned-2016.png", alt: "", caption: "" }

];

    $scope.myInterval = 4000;
    $scope.promise = undefined;
    $scope.currentSlide = -1;
    $scope.promise = $interval(scrollCarousel, $scope.myInterval);

    function scrollCarousel() {
        var allSlides = $('.carousel-inner').children();
        var allIndicators = $('.carousel-indicators').children();
        //alert(allSlides.length);
        for (var i = 0, n = allSlides.length; i < n; i++) {
            if (allSlides[i].className == "ng-scope item active" || allSlides[i].className == "item active") {
                allSlides[i].className = "item";
                allIndicators[i].className = "";
                if (i == n - 1) {
                    i = 0;
                }
                else {
                    i = i + 1;
                }
                allSlides[i].className = "item active";
                allIndicators[i].className = "active";
                $scope.currentSlide = i;
            }
        }
    };

    $scope.stepNext = function () {
        scrollCarousel();
    };

    $scope.stepBack = function () {
        var allSlides = $('.carousel-inner').children();
        var allIndicators = $('.carousel-indicators').children();
        for (var i = 0, n = allSlides.length; i < n; i++) {
            if (allSlides[i].className == "ng-scope item active" || allSlides[i].className == "item active") {
                allSlides[i].className = "item";
                allIndicators[i].className = "";
                if (i == 0) {
                    i = n-1;
                }
                else {
                    i = i - 1;
                }
                allSlides[i].className = "item active";
                allIndicators[i].className = "active";
            }
        }
    };

    $scope.goToSlide = function (slideIndex) {
        var allSlides = $('.carousel-inner').children();
        var allIndicators = $('.carousel-indicators').children();
        for (var i = 0, n = allSlides.length; i < n; i++) {
            if (i == slideIndex)
                {
                    if (allSlides[i].className != "ng-scope item active" && allSlides[i].className != "item active") {
                        allSlides[i].className = "item active";
                        allIndicators[i].className = "active";
                    }
                }
                else {
                    allSlides[i].className = "item";
                    allIndicators[i].className = "";
                }
        }
    };

    $scope.pauseCarousel = function () {
        var slideCaptions = $('.carousel-caption');
        //alert(slideCaptions.length);
        if (angular.isDefined($scope.promise))
        {
            $interval.cancel($scope.promise);
            $scope.promise = undefined;
            for (var i = 0, n = slideCaptions.length; i < n; i++) {
                slideCaptions[i].innerText = 'Click image to start slide show';
            }
        }
        else {
            $scope.promise = $interval(scrollCarousel, $scope.myInterval);
            for (var i = 0, n = slideCaptions.length; i < n; i++) {
                slideCaptions[i].innerText = 'Click image to pause slide show';
            }
        }
    }

    $scope.$on('$locationChangeStart', function (event, next, current) {
        $scope.$parent.style = function () { return { 'margin': '0', 'padding': '0'/*, 'background': '#000000' */}; }
        $scope.$parent.bodyClass = function () { return ''; }
        $scope.$parent.showPlayer = function () { return false; }
        $interval.cancel($scope.promise);
        promise = undefined;
        //soundManager.stopAll();
        //playerParent.appendChild(pagePlayer);
    });
}
]);


