(function () {
    "use strict";
    var myAppModule = angular.module('myApp');
    myAppModule.factory('defaultService', function () {

        var homeImages = [
        { id: 1, src: "http://thethingswecreate.com/Content/images/WithEmoji/With Mask/Final-Page-2016.png" },
        { id: 2, src: "http://thethingswecreate.com/Content/images/WithEmoji/With Mask/Welcome-2016.png" },
        { id: 3, src: "http://thethingswecreate.com/Content/images/WithEmoji/With Mask/Page-01-2016.png" },
        { id: 4, src: "http://thethingswecreate.com/Content/images/WithEmoji/With Mask/Page-02-2016.png" },
        { id: 5, src: "http://thethingswecreate.com/Content/images/WithEmoji/With Mask/Page-03-2016.png" },
        { id: 6, src: "http://thethingswecreate.com/Content/images/WithEmoji/With Mask/Page-04-2016.png" },
        { id: 7, src: "http://thethingswecreate.com/Content/images/WithEmoji/With Mask/Page-05-2016.png" },
        { id: 8, src: "http://thethingswecreate.com/Content/images/WithEmoji/With Mask/Page-06-2016.png" },
        { id: 9, src: "http://thethingswecreate.com/Content/images/WithEmoji/With Mask/Page-07-2016.png" },
        { id: 10, src: "http://thethingswecreate.com/Content/images/WithEmoji/With Mask/Page-08-2016.png" },
        { id: 11, src: "http://thethingswecreate.com/Content/images/WithEmoji/With Mask/Page-09-2016.png" },
        { id: 12, src: "http://thethingswecreate.com/Content/images/WithEmoji/With Mask/Bike-aligned-2016.png" }
        ];
        return {
            getHomeImages: function () {
                return homeImages;
            },

            getHomeImage: function (homeImageId) {
                var existingImage = null;
                angular.forEach(homeImages, function (homeImage) {
                    if (homeImage.id == homeImageId) {
                        existingImage = homeImage;
                    }
                });
                return existingImage;
            }
        };
    });
})();