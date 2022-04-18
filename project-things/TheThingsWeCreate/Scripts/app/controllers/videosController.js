var playerParent = "";
var currentAlbum = "album2";
var myAppModule = angular.module('myApp');
myAppModule.controller('VideosController', ['$scope', '$window', '$rootElement', '$location', '$sce', '$routeParams', 'videosService',
function ($scope, $window, $rootElement, $location, $sce, $routeParams, videosService) {
    $scope.$parent.style = function () { return { 'margin': '0', 'padding': '0', 'background': '#98643d url(http://TheThingsWeCreate.com/Content/images/bg.png) repeat top left' }; }
    $scope.$parent.bodyClass = function () { return 'orange'; }

    $scope.musicvideos = true;
    $scope.movieclips = true;
    $scope.eventsclips = true;
    $scope.miscvideos = true;
    $scope.isFilterMenuCollapsed = $scope.$parent.isMainMenuCollapsed;
    $scope.currentVideo = '';
    document.title = "Lawdshouse Videos";

        if (document.getElementById("videocontainer")) {
            document.getElementById("videocontainer").style.height = ($window.innerHeight - 230) + "px";

            if (document.getElementById("videoInnerContainer"))
            {
                document.getElementById("videoInnerContainer").style.height = ($window.innerHeight - 230) + "px";

            }
        }
        if (document.getElementById('videoNavBar')) {
            document.getElementById('videoNavBar').style.bottom = '0px';
        }

        $scope.$parent.SetSelectedMenuClass($location.path());

    $scope.calledFromOther = false;
    var tmpMusicVideos
    var tmpMovieClips
    var tmpEventClips
    var tmpMiscvideos

    videosService.setVideosList($window.videos);
    $scope.videosList = videosService.getVideosList();
    var showAboutVideo = new Array($scope.videosList.length);

    for (i = 0; i < $scope.videosList.length; i++) {
        showAboutVideo[i] = true;
    }

    $scope.getVideoTitle = function (videoId) { return $sce.trustAsHtml($scope.videosList[videoId].title); }
    $scope.setShowAboutVideo = function (videoId) { showAboutVideo[videoId] = !showAboutVideo[videoId]; }
    $scope.getShowAboutVideo = function (videoId) { return showAboutVideo[videoId];}

    if ($scope.$parent.isMainMenuCollapsed == false)
        $scope.$parent.isMainMenuCollapsed = true;
    
    $scope.filterButtonClass = function (boolButtonIndicator) {
        return !boolButtonIndicator ? 'btn btn-success filter-videos-btn-deselect' : 'btn btn-success filter-videos-btn';
    };

    $scope.musicVideosClick = function ()
    {
        $scope.musicvideos = !$scope.musicvideos;
    }

    $scope.movieClipsClick = function () {
        $scope.movieclips = !$scope.movieclips;
    }

    $scope.miscVideosClick = function () {
        $scope.miscvideos = !$scope.miscvideos;
    }

    $scope.PlayVideo = function (videoYtId, videoId) {
        tmpMusicVideos = $scope.musicvideos;
        tmpMovieClips = $scope.movieclips;
        tmpEventClips = $scope.eventsclips;
        tmpMiscvideos = $scope.miscvideos;

        $scope.movieclips = false;
        $scope.musicvideos = false;
        $scope.eventsclips = false;
        $scope.miscvideos = false;

        $scope.currentVideo = videoYtId;
        $scope.currentVideoDescription = $sce.trustAsHtml($scope.videosList[videoId].synopsis);
        document.getElementById("videoPlayer").src = $scope.getVideoURL();
    };

    $scope.closeCurrentVideo = function () {
            $scope.currentVideo = '';
        if (!$scope.calledFromOther) {
            document.getElementById("videoPlayer").src = "loading.html";
            $scope.movieclips = tmpMovieClips;
            $scope.musicvideos = tmpMusicVideos;
            $scope.eventsclips = tmpEventClips;
            $scope.miscvideos = tmpMiscvideos;
        }
        else
        {
            $scope.calledFromOther = false;
            $scope.$parent.go('/home');
        }
    }

    $scope.getVideoURL = function () { return 'http://www.youtube.com/embed/' + $scope.currentVideo; }

    $scope.eventsVideosClick = function () {
        $scope.eventsclips = !$scope.eventsclips;
    };

    var _videoYTId = $routeParams.videoYTId;
    if (_videoYTId)
    {
        $scope.calledFromOther = true;
        $scope.PlayVideo($routeParams.videoYTId, videosService.getVideoItemByYTId(_videoYTId).id)
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