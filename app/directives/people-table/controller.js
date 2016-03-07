(function (ng) {
    ng.module('buildconTest').directive('peopleTable', [
        function () {
            return {
                restrict: 'E',
                scope: {
                    people: '=',
                    activePerson: '='
                },
                templateUrl: 'app/directives/people-table/view.html',
                link: function (scope, element, attrs) {
                    scope.selectAll = false;

                    scope.toggleAll = function() {
                        scope.people.forEach(function(person) {
                            person.isSelected = scope.selectAll;
                        })
                    };

                    scope.toggleFavourite = function(person) {
                        person.favourite = !person.favourite;
                    };

                    scope.deleteSelected = function() {
                        scope.people.forEach(function(person) {
                            if (person.isSelected) {
                                person.isDisabled = true;
                            }
                        })
                    };

                    scope.setActivePerson = function(e, person) {
                        var element = e.target;
                        if (element.className.indexOf('glyphicon-star-empty') > -1 ||
                            element.className.indexOf('glyphicon-star') > -1 ||
                            element.className.indexOf('select-person') > -1) {
                            return;
                        }

                        scope.$emit('changeActivePerson', person);
                    };
                }
            };
        }
    ])
}(window.angular));
