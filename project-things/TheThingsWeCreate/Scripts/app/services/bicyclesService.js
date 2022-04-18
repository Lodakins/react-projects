(function () {
    "use strict";
    var myAppModule = angular.module('myApp');
    myAppModule.factory('bicyclesService', function () {
        var bicycleTypes = [
        { id: 1, name: "Road Bike" },
        { id: 2, name: "Mountain Bike" },
        { id: 3, name: "Urban Bike" },
        { id: 4, name: "Children Bike" }
        ];

        var bicycles = [
        { id: 1, name: "Very Fast bike", type: 1, typeName: "Road Bike", quantity: 5, rentPrice: 15 },
        { id: 2, name: "Very Springy bike", type: 2, typeName: "Mountain Bike", quantity: 20, rentPrice: 17 },
        { id: 3, name: "Very Classy bike", type: 3, typeName: "Urban Bike", quantity: 20, rentPrice: 14 },
        { id: 4, name: "Very Colorful bike", type: 4, typeName: "Children Bike", quantity: 20, rentPrice: 9 }
        ];
        return {
            getBicycles: function () {
                return bicycles;
            },
            getBicycle: function(bicycleId){
                var existingBicycle = null;
                angular.forEach(bicycles, function (bicycle) {
                    if (bicycle.id == bicycleId) {
                        existingBicycle = bicycle;
                    }
                });
                return existingBicycle;
            },
            getBicycleTypes: function () {
                return bicycleTypes;
            },
            createBicycle: function () {
                return {
                    type: bicycleTypes[0].id,
                    typeName: bicycleTypes[0].name,
                    quantity: 1,
                    rentPrice: 10
                };
            },
            addBicycle: function (bicycle) {
                angular.forEach(bicycleTypes, function (bicycleType) {
                    if (bicycleType.id == bicycle.type) {
                        bicycle.typeName = bicycleType.name;
                    }
                });
                bicycle.id = bicycles.length + 1;
                bicycles.push(bicycle);
            }
        };
    });
})();