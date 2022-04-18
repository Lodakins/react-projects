var playerParent = "";
var myAppModule = angular.module('myApp');
myAppModule.controller('ArtistController', ['$scope', '$window', '$rootElement', '$location', '$sce', '$http', '$routeParams', 'artistService',
function ($scope, $window, $rootElement, $location, $sce, $http, $routeParams, artistService) {
    $scope.$parent.style = function () { return { 'margin': '0', 'padding': '0', 'background': '#98643d url(http://TheThingsWeCreate.com/Content/images/bg.png) repeat top left' }; }
    //$scope.$parent.bodyClass = function () { return 'orange'; }
    $scope.inputContactName = "";
    $scope.inputContactEmail = "";
    $scope.inputContactSubject = "";
    $scope.inputContactMessage = "";

    $scope.$parent.SetSelectedMenuClass($location.path());

    
    document.title = "TheThingsWeCreate - Contact us" ;//: "Artist " + $routeParams.action + " - " + $routeParams.artistName;

    if ($scope.$parent.isMainMenuCollapsed == false)
        $scope.$parent.isMainMenuCollapsed = true;

    //var pagePlayer = document.getElementById("player");
    //playerParent = pagePlayer.parentNode;

    //var playerCont = document.getElementById("playerContainer");
    //playerCont.appendChild(pagePlayer);
    //$scope.$parent.showPlayer = function () { return true; }

    $scope.artistName = $routeParams.artistName;
    $scope.actionURL = "http://thethingswecreate.com/aspapi/sendEmail.aspx?displayName=" + $scope.artistName;
    $scope.getArtistName = function () { return $scope.artistName; };
    $scope.getActionURL = function (artistName) { return "http://thethingswecreate.com/aspapi/sendEmail.aspx?displayName=" + artistName; }
    $scope.action = $routeParams.action;
    $scope.notabs = ($routeParams.notabs ? true : false);
    $scope.tmpArtistName = $scope.artistName.toString().split(" ").join("");

    artistService.setArtistsBiosArray($window.artists);
    artistService.setArtistsBiosSubHeadingArray($window.artistsSubHeading)
    artistService.setArtistsPortfolioArray($window.artistsPortfolio)
    var portfolioTracks = artistService.getArtistPortfolio($scope.artistName)
    
    $scope.myForm = {};
    //$scope.myForm.inputContactName = "Law";
    //$scope.myForm.inputContactEmail = "ladeokun@retain.name";
    //$scope.myForm.inputContactSubject = "Test message from lawdshouse"
    //$scope.myForm.inputContactMessage = "Test";

    var pagePlayerPlaylist = document.getElementById("playerPlaylist");
    //while (pagePlayerPlaylist.firstChild) {
        //pagePlayerPlaylist.removeChild(pagePlayerPlaylist.firstChild);
    //}
    $scope.emailResult = '';
    $scope.SendEmailTo = function (artistName) {
        $scope.actionURL = "http://thethingswecreate.com/aspapi/sendEmail.aspx?displayName=" + artistName;

        $http({
            method: 'POST',
            url: $scope.actionURL,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: $.param($scope.myForm)
        }).success(function (data) {
            //alert("email sent!");
            $scope.myForm = {};
            $scope.emailResult = $sce.trustAsHtml("Thanks for getting in touch. Your email has been sent.")
        })
        .error(function (data) {
            //alert("Email not sent!");
            $scope.emailResult = $sce.trustAsHtml("We appologize for the inconvenience but an error occured.  Please click <a href='mailto:ladeokun@thethingswecreate.com'>here</a> to contact us using your email client instead. Thank you");
        });

    }


    for (i = 0; i < portfolioTracks.length; i++) {
        var liTag = document.createElement('li');
        var atag = document.createElement('a');
        atag.href = portfolioTracks[i].url;
        atag.innerHTML = "<b>" + portfolioTracks[i].performer + "</b> - " + portfolioTracks[i].title + "<span class=\"label\">" + portfolioTracks[i].label + "</span>";
        liTag.appendChild(atag);
        liTag.style.listStyle = "outside none";
        //pagePlayerPlaylist.appendChild(liTag);
    }

    if ($scope.action == 'portfolio') {
        var playlistDrawer = document.getElementById("playerPlaylistContainer");
        playlistDrawer.style.height = '188px';
    }

    $scope.currentArtistBio = $sce.trustAsHtml(artistService.getArtistBio($scope.artistName));
    $scope.currentArtistBioSubHeading = $sce.trustAsHtml(artistService.getArtistBioSubHeading($scope.artistName));
    $scope.slide = true;


    $scope.$on('$locationChangeStart', function (event, next, current) {
        $scope.$parent.style = function () { return { 'margin': '0', 'padding': '0', 'background': '#000000' }; }
        $scope.$parent.bodyClass = function () { return ''; }
        $scope.$parent.showPlayer = function () { return false; }
        //soundManager.stopAll();
        //playerParent.appendChild(pagePlayer);
    });
}
]);