var playerParent = "";
var myAppModule = angular.module('myApp');
myAppModule.controller('MusicController', ['$scope', '$window', '$rootElement', '$location', '$sce', '$routeParams', 'musicService',
function ($scope, $window, $rootElement, $location, $sce, $routeParams, musicService) {
    $scope.$parent.style = function () { return { 'margin': '0', 'padding': '0', 'background': '#98643d url(http://TheThingsWeCreate.com/Content/images/bg.png) repeat top left' }; }
    $scope.$parent.bodyClass = function () { return 'orange'; }
    $scope.SetCurrentAlbum = function (aId) { $scope.albumId = aId; $scope.albTracks = musicService.getAlbumTracks($scope.albumId); $scope.currentAlbumDescription = $sce.trustAsHtml(musicService.getAlbumDescription($scope.albumId)) }
    if ($scope.$parent.isMainMenuCollapsed == false)
        $scope.$parent.isMainMenuCollapsed = true;

    $scope.$parent.SetSelectedMenuClass($location.path());

    var pagePlayer = document.getElementById("player");
    playerParent = pagePlayer.parentNode;
    document.title = "Lawdshouse Music - Albums, Singles, BeatsTruMentals";

    $scope.musicPanelContainerWidth = function () { return document.getElementById("musicPlayerPanel").clientWidth + "px"; }
    var playerCont = document.getElementById("playerContainer");
    playerCont.appendChild(pagePlayer);
    $scope.$parent.showPlayer = function () { return true; }
    
    var currentAlbum = "album12";
    if ($routeParams.albumId) {
        $scope.albumId = $routeParams.albumId;
        $scope.slide = false;
    }
    else {
        $scope.albumId = currentAlbum;
        $scope.slide = true;
    }

    musicService.setAlbumsImgsArray($window.albumsImgs);
    musicService.setAlbumsDescriptionsArray($window.albumsDescsHTML);
    musicService.setAlbumsTracksArray($window.albumsTracks);

    $scope.albsTracks = musicService.getAlbumsTracks();
    $scope.albsImages = musicService.getAlbumsImgs();
    $scope.albumListKeys = (Object.keys($scope.albsImages).toString().split(","));

    var pagePlayerPlaylist = document.getElementById("playerPlaylist");
    while (pagePlayerPlaylist.firstChild) {
        pagePlayerPlaylist.removeChild(pagePlayerPlaylist.firstChild);
    }
    $scope.PlayListArray = new Array();

    for (x = 0; x < $scope.albumListKeys.length; x++){
        $scope.albTracks = musicService.getAlbumTracks($scope.albumListKeys[x]);
        for (i = 0; i < $scope.albTracks.length; i++) {
            var liTag = document.createElement('li');
            var atag = document.createElement('a');
            atag.href = $scope.albTracks[i].mp3_url;
            atag.id = escape($scope.albTracks[i].title);
            atag.innerHTML = "<b>" + $scope.albTracks[i].performer + "</b> - " + $scope.albTracks[i].title + "<span class=\"label\">" + $scope.albTracks[i].label + "</span>";
            liTag.appendChild(atag);
            pagePlayerPlaylist.appendChild(liTag);
            $scope.PlayListArray[$scope.PlayListArray.length] = $scope.albTracks[i].title;
        }
    }
    $scope.albTracks = musicService.getAlbumTracks($scope.albumId);

    $scope.PlayAll = function (albumId) {
        var albTrcks = musicService.getAlbumTracks(albumId);

        if (albTrcks.length > 0)
        {
            $scope.PlayTrack(albTrcks[0].id);
            $scope.slide = true;
        }
    }

    $scope.PlayTrack = function (trackId) {
        var trackInPlayList = document.getElementById(escape($scope.albTracks[trackId - 1].title));
        if ($scope.PlayListArray.indexOf($scope.albTracks[trackId - 1].title) == -1) {
            var liTag = document.createElement('li');
            var atag = document.createElement('a');
            atag.href = $scope.albTracks[i].mp3_url;
            atag.id = escape($scope.albTracks[i].title);
            atag.innerHTML = "<b>" + $scope.albTracks[i].performer + "</b> - " + $scope.albTracks[i].title + "<span class=\"label\">" + $scope.albTracks[i].label + "</span>";
            liTag.appendChild(atag);
            pagePlayerPlaylist.appendChild(liTag);
            $scope.PlayListArray[$scope.PlayListArray.length] = $scope.albTracks[i].title;
        }
        $window.fireEvent(trackInPlayList, 'click');
        trackInPlayList.click();
        //alert(trackInPlayList.offsetTop)
        $window.scrollPlayer(trackInPlayList.offsetTop);
    };

    $scope.AddTrackToPlayList = function (trackId) {
        if ($scope.PlayListArray.indexOf($scope.albTracks[trackId - 1].title) > -1) {
            alert($scope.albTracks[trackId - 1].title + " is already in the Playlist");
        }
    };

    $scope.currentAlbumImg = function () { return musicService.getAlbumImg($scope.albumId); }
    $scope.currentAlbumDescription = $sce.trustAsHtml(musicService.getAlbumDescription($scope.albumId));
    var playlistDrawer = document.getElementById("playerPlaylistContainer");
    playlistDrawer.style.height = '158px';

    //document.getElementById("musicFooter").scrollIntoView();

    $scope.$on('$locationChangeStart', function (event, next, current) {
        $scope.$parent.style = function () { return { 'margin': '0', 'padding': '0', 'background': '#000000' }; }
        $scope.$parent.bodyClass = function () { return ''; }
        $scope.$parent.showPlayer = function () { return false; }
        soundManager.stopAll();
        playerParent.appendChild(pagePlayer);
    });
}
]);