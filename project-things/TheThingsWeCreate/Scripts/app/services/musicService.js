(function () {
    "use strict";
    var myAppModule = angular.module('myApp');
    myAppModule.factory('musicService', function () {

        var albumsImgs = new Array();
        var albumsDescriptions = new Array();
        var albumsTracks = new Array();

        return {
            setAlbumsImgsArray: function (albumsImgsArray) {
                albumsImgs = albumsImgsArray;
            },

            setAlbumsDescriptionsArray: function (albumsDescriptionsArray) {
                albumsDescriptions = albumsDescriptionsArray;
            },

            setAlbumsTracksArray: function (albumsTracksArray) {
                albumsTracks = albumsTracksArray;
            },

            getAlbumsImgs: function () {
                return albumsImgs;
            },

            getAlbumImg: function (albumId) {
                var tmpAlbumId = albumId.toString().split(" ").join("");
                return albumsImgs[tmpAlbumId];
            },

            getAlbumsTracks: function () {
                return albumsTracks;
            },

            getAlbumTracks: function (albumId) {
                var tmpAlbumId = albumId.toString().split(" ").join("");
                return albumsTracks[tmpAlbumId];
            },

            getAlbumsDescriptions: function () {
                return albumsDescriptions;
            },

            getAlbumDescription: function (albumId) {
                var tmpAlbumId = albumId.toString().split(" ").join("");
                return albumsDescriptions[tmpAlbumId];
            }

        };
    });
})();