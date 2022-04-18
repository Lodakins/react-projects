var playerParent = "";
var currentAlbum = "album2";
var myAppModule = angular.module('myApp');
myAppModule.controller('NewsController', ['$scope', '$window', '$rootElement', '$location', '$sce', '$routeParams', 'newsService',
function ($scope, $window, $rootElement, $location, $sce, $routeParams, newsService) {
    $scope.$parent.style = function () { return { 'margin': '0', 'padding': '0', 'background': '#98643d url(http://TheThingsWeCreate.com/Content/images/bg.png) repeat top left' }; }
    //$scope.$parent.bodyClass = function () { return 'orange'; }
    document.title = "Lawdshouse - Whats New";



    $scope.isFilterMenuCollapsed = $scope.$parent.isMainMenuCollapsed;

    $scope.$parent.SetSelectedMenuClass($location.path());


    newsService.setNewsListArray($window.news);
    $scope.newsList = newsService.getNewsList();
    $scope.currentNews = '0';

    if ($scope.$parent.isMainMenuCollapsed == false)
        $scope.$parent.isMainMenuCollapsed = true;

    $scope.filterButtonClass = function (boolButtonIndicator) {
        return !boolButtonIndicator ? 'btn btn-success filter-videos-btn-deselect' : 'btn btn-success filter-videos-btn';
    };

    $scope.getNewsItemBody = function (newsId) { return $sce.trustAsHtml($scope.newsList[newsId].newsBody) }

    $scope.newsButtonClick = function (newsID) {
        var div = document.getElementById('news' + $scope.currentNews);
        if (div)
        {
            div.parentNode.style.overflow = "hidden";
            div.style.top = "0px";
            var retVal
            retVal = $scope.move(div, 1, 25);
            div.style.display = 'none';
        }

        var div = document.getElementById('news' + newsID);
        div.style.display = '';
        div.style.top = "0px";
        div.parentNode.style.overflow = "auto";
        $scope.currentNews = newsID.toString();
    }

    document.getElementById("newscontainer").style.height = $window.innerHeight > 500 ? ($window.innerHeight - 180) + "px" : "442px";
    $scope.newsRowHeight = $window.innerHeight > 500 ? ($window.innerHeight - 322) + "px" : "300px";
    var allNewsElements = document.getElementsByName("news");
    for (var i = 0, n = allNewsElements.length; i < n; i++) {
        document.getElementById("news" + i).scrollTop = 0;
        document.getElementById("news" + i).style.maxHeight = $scope.newsRowHeight;
        document.getElementById("news" + i).style.height = $scope.newsRowHeight;
    }


    //if ($window.innerHeight > 700) {
    //    alert($window.innerHeight)
    //}
    //else {
    //    $scope.newsRowHeight = ($window.innerHeight - 282) + "px"
    //    document.getElementById("newscontainer").style.height = ($window.innerHeight - 140) + "px";
    //    var allNewsElements = document.getElementsByName("news");
    //    for (var i = 0, n = allNewsElements.length; i < n; i++) {
    //        allNewsElements[i].style.maxHeight = $scope.newsRowHeight;
    //        allNewsElements[i].style.height = $scope.newsRowHeight;
    //        allNewsElements[i].style.overflowY = 'auto';
    //    }
    //}

    $scope.move = function (obj, i, max) {
        $scope.posit = parseInt(obj.style.top.replace("px", ""));

        obj.style.top = parseInt(obj.style.top.replace("px", "")) + i + "px";

        i = i + 1;
        if (i >= max)
            return true;
        else
        {
            var retVal = $scope.move(obj, i++, max);
        }
    }



    $scope.$on('$locationChangeStart', function (event, next, current) {
        $scope.$parent.style = function () { return { 'margin': '0', 'padding': '0', 'background': '#000000' }; }
        $scope.$parent.bodyClass = function () { return ''; }
        $scope.$parent.showPlayer = function () { return false; }
        //soundManager.stopAll();
        //playerParent.appendChild(pagePlayer);
    });
}
]);