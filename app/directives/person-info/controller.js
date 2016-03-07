(function (ng) {
    ng.module('buildconTest').directive('personInfo', [
        function () {
            return {
                restrict: 'E',
                scope: {
                    activePerson: '='
                },
                templateUrl: 'app/directives/person-info/view.html',
                link: function (scope, element, attrs) {
                    scope.isCollapsed = {
                        occupation: true,
                        contacts: true,
                        social: true,
                        address: true
                    };

                    scope.toggleCollapse = function(panelName) {
                        scope.isCollapsed[panelName] = !scope.isCollapsed[panelName];
                    }
                }
            };
        }
    ])
}(window.angular));
