var playerParent = "";
var myAppModule = angular.module('myApp');
myAppModule.controller('AboutController', ['$scope', '$window', '$rootElement', '$location', '$sce', '$routeParams', 'defaultService',
function ($scope, $window, $rootElement, $location, $sce, $routeParams, defaultService) {
    $scope.$parent.style = function () { return { 'margin': '0', 'padding': '0', 'background': '#98643d url(http://TheThingsWeCreate.com/Content/images/bg.png) repeat top left' }; }
    document.title = "About ThingsWeCreate";
    $scope.$parent.ClearMenuItemClasses();
    if ($scope.$parent.isMainMenuCollapsed == false)
        $scope.$parent.isMainMenuCollapsed = true;

    $scope.$parent.SetSelectedMenuClass($location.path());
    $scope.homeImages = defaultService.getHomeImages();
    $scope.currentImage = Math.floor((Math.random() * ($scope.homeImages.length-2) + 2));
    //document.getElementById("jombotronPanel").scrollIntoView();

    $scope.$on('$locationChangeStart', function (event, next, current) {
        $scope.$parent.style = function () { return { 'margin': '0', 'padding': '0', 'background': '#fefde8' }; }
        $scope.$parent.bodyClass = function () { return ''; }
        $scope.$parent.showPlayer = function () { return false; }
        //soundManager.stopAll();
        //playerParent.appendChild(pagePlayer);
    });
}
]);