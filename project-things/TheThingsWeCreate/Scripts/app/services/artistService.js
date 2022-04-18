(function () {
    "use strict";
    var myAppModule = angular.module('myApp');
    myAppModule.factory('artistService', function () {

        var artistsBios = new Array();
        var artistsBiosSubHeadings = new Array(); 
        var artistsPortfolios = new Array();

        return {
            setArtistsBiosArray: function(artistsBiosArray)
            {
                artistsBios = artistsBiosArray;
            },

            setArtistsBiosSubHeadingArray: function (artistsBiosSubHeadingArray)
            {
                artistsBiosSubHeadings = artistsBiosSubHeadingArray;
            },

            setArtistsPortfolioArray: function (artistsPortfolioArray)
            {
                artistsPortfolios = artistsPortfolioArray;
            },

            getArtistsBios: function () {
                return artistsBios;
            },

            getArtistBio: function (artistName) {
                var tmpArtistName = artistName.toString().split(" ").join("");
                return artistsBios[tmpArtistName];
            },

            getArtistsPortfolios: function () {
                return artistsPortfolios;
            },

            getArtistPortfolio: function (artistName) {
                var tmpArtistName = artistName.toString().split(" ").join("");
                return artistsPortfolios[tmpArtistName];
            },

            getArtistsBiosSubHeadings: function () {
                return artistsBiosSubHeadings;
            },

            getArtistBioSubHeading: function (artistName) {
                var tmpArtistName = artistName.toString().split(" ").join("");
                return artistsBiosSubHeadings[tmpArtistName];
            }

        };
    });
})();