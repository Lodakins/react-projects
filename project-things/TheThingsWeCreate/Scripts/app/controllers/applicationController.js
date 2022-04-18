(function () {
    "use strict";
    var myAppModule = angular.module('myApp');
    myAppModule.controller('ApplicationController', ['$scope', '$window', '$rootElement', '$location', 'defaultService',
    function ($scope, $window, $rootElement, $location, defaultService) {
        $scope.isMainMenuCollapsed = true;
        $scope.currentImage = 1;
        document.title = "Welcome to TheThingsWeCreate";
        $scope.homeImages = defaultService.getHomeImages();
        $scope.style = function () { return { 'margin': '0', 'padding': '0', 'background': '#fefde8' }; }
        $scope.showPlayer = function () { return false; };
        $scope.currentMenu = function () { return $location.path(); };

        //soundManager.debugMode = false;
        
        $scope.IsMenuSelected = function (menuDescription) { return ($location.path().toString().indexOf(menuDescription) == 0 ? true : false) }

        $scope.go = function (path) { $location.path(path);}

        $scope.SetSelectedMenuClass = function (attributeValue) {
            var matchingElements = [];
            var allElements = document.getElementsByTagName('a');

            for (var i = 0, n = allElements.length; i < n; i++) {

                if (allElements[i].getAttribute("href") == "#" + attributeValue) {
                    allElements[i].style.backgroundColor = ('#2b8fff');
                    allElements[i].style.color = 'white';
                }
                else
                {
                    allElements[i].style.backgroundColor = ('');
                    allElements[i].style.color = '';
                }
            }
        }
        $scope.newsRowHeight = "460px";

        var w = angular.element($window);
        w.bind('resize', function () {
            if (document.getElementById("newscontainer")) {
                document.getElementById("newscontainer").style.height = $window.innerHeight > 500 ? ($window.innerHeight - 180) + "px" : "442px";
                $scope.newsRowHeight = $window.innerHeight > 500 ? ($window.innerHeight - 322) + "px" : "300px";
                var allNewsElements = document.getElementsByName("news");
                for (var i = 0, n = allNewsElements.length; i < n; i++) {
                    document.getElementById("news" + i).scrollTop = 0;
                    document.getElementById("news" + i).style.maxHeight = $scope.newsRowHeight;
                    document.getElementById("news" + i).style.height = $scope.newsRowHeight;
                }
            }
            if ($window.innerHeight > 700) {
            //alert(document.body.clientHeight)
                if (document.getElementById("videocontainer"))
                {
                    document.getElementById("videocontainer").style.height = ($window.innerHeight - 230) + "px";
                    if (document.getElementById("videoInnerContainer"))
                    {
                        document.getElementById("videoInnerContainer").style.height = ($window.innerHeight - 230) + "px";
                    }
                }
                if(document.getElementById('videoNavBar'))
                {
                    document.getElementById('videoNavBar').style.bottom = '0px';
                }
            }
            else {
                if (document.getElementById("videocontainer"))
                {
                    document.getElementById("videocontainer").style.height = (document.body.clientHeight - 130) + "px";
                    if (document.getElementById("videoInnerContainer"))
                    {
                        document.getElementById("videoInnerContainer").style.height = (document.body.clientHeight - 130) + "px";
                    }
                    //document.getElementById("videocontainer").style.minHeight = (document.body.clientHeight - 300) + "px";
                }
                if(document.getElementById('videoNavBar'))
                {
                    document.getElementById('videoNavBar').style.bottom = '0px';
                }
            }
        });


        $scope.ClearMenuItemClasses = function () {
            var matchingElements = [];
            var allElements = document.getElementsByTagName('a');

            for (var i = 0, n = allElements.length; i < n; i++) {
                    allElements[i].style.backgroundColor = ('');
                    allElements[i].style.color = '';
            }
        }
        $scope.ClearMenuItemClasses();
        $scope.SetSelectedMenuClass($location.path());



    }
    ]);
})();