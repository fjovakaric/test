(function (ng) {
    ng.module('buildconTest').directive('navigation', [
        function () {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: 'app/partials/navigation/view.html',
                link: function (scope, element, attrs) {

                }
            };
        }
    ])
}(window.angular));
