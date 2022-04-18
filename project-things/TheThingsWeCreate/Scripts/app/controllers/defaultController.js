var playerParent = "";
var currentAlbum = "album2";
var myAppModule = angular.module('myApp');
myAppModule.controller('DefaultController', ['$scope', '$window', '$rootElement', '$location', '$sce', '$routeParams',
function ($scope, $window, $rootElement, $location, $sce, $routeParams) {
    document.title = "Welcome to TheThingsWeCreate";
    $scope.$parent.ClearMenuItemClasses();
    $scope.currentImage = 0;



    $scope.$on('$locationChangeStart', function (event, next, current) {
        $scope.$parent.style = function () { return { 'margin': '0', 'padding': '0'/*, 'background': '#000000' */}; }
        $scope.$parent.bodyClass = function () { return ''; }
        $scope.$parent.showPlayer = function () { return false; }
        //soundManager.stopAll();
        //playerParent.appendChild(pagePlayer);
    });
}
]);