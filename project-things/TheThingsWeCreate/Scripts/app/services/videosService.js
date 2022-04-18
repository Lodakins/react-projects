(function () {
    "use strict";
    var myAppModule = angular.module('myApp');
    myAppModule.factory('videosService', function () {

        var videosList = new Array();

        return {
            setVideosList: function (videosListArray) {
                videosList = videosListArray;
            },


            getVideosList: function () {
                return videosList;
            },

            getVideoItem: function (videoId) {
                var tmpVideoId = videoId.toString().split(" ").join("");
                return videosList[tmpVideoId];
            },

            getVideoItemByYTId: function (videoYTId) {
                for (i = 0; i < videosList.length; i++) {
                    if(videosList[i].videoYTId == videoYTId)
                    return videosList[i];
                }
            }
        };
    });
})();