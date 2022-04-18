(function () {
    "use strict";
    var myAppModule = angular.module('myApp');
    myAppModule.factory('newsService', function () {

        var newsList = new Array();

        return {
            setNewsListArray: function (newsListArray) {
                newsList = newsListArray;
            },


            getNewsList: function () {
                return newsList;
            },

            getNewsItem: function (newsId) {
                var tmpNewsId = newsId.toString().split(" ").join("");
                return newsList[newsId];
            }
        };
    });
})();