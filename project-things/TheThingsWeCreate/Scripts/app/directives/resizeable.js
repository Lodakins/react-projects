//var myAppModule = angular.module('myApp');
myAppModule.directive("cdSlide",
function () {
    // I allow an instance of the directive to be hooked
    // into the user-interaction model outside of the
    // AngularJS context.
    function link($scope, element, attributes) {
        // I am the TRUTHY expression to watch.
        var expression = attributes.cdSlide;
        // I am the optional slide duration.
        var duration = (attributes.cdSlideDuration || "fast");
        // I check to see the default display of the
        // element based on the link-time value of the
        // model we are watching.
        if (!$scope.$eval(expression)) {
            element[0].style.display = 'none'
        }
        // I watch the expression in $scope context to
        // see when it changes - and adjust the visibility
        // of the element accordingly.
        $scope.$watch(
        expression,
        function (newValue, oldValue) {
            // Ignore first-run values since we've
            // already defaulted the element state.
            if (newValue === oldValue) {
                return;
            }
            // Show element.
            if (newValue) {
                element[0]
                .stop(true, true)
                .slideUp(duration)
                ;
                element[0].style.display = ''
                // Hide element.
            } else {
                element[0]
                .stop(true, true)
                .slideDown(duration)
                ;
                element.style.display = 'none'
            }
        }
        );
    }
    // Return the directive configuration.
    return ({
        link: link,
        restrict: "A"
    });
}
);