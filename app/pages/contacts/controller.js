(function (ng) {
    ng.module('buildconTest').controller('ContactsCtrl', [
        '$scope',
        function ($scope) {
            $scope.tabs = [
                {
                    heading: 'All Contacts',
                    route: 'all',
                    active: true
                },
                {
                    heading: 'Favourites',
                    route: 'favourites',
                    active: false
                },
                {
                    heading: 'Unauthorized',
                    route: 'unauthorized',
                    active: false
                }
            ];
            $scope.changeTab = function(route) {
                $scope.tabs.forEach(function(tab) {
                    tab.active = (tab.route == route);
                })
            };

            $scope.tags = [
                {
                    id: 1,
                    tagName: 'Tag 1',
                    color: '#38A8F1'
                },
                {
                    id: 2,
                    tagName: 'Tag 2',
                    color: '#9B58B7'
                },
                {
                    id: 3,
                    tagName: 'Tag 3',
                    color: '#F17303'
                }
            ];

            $scope.groups = [
                {
                    id: 1,
                    groupName: 'Group 1',
                    color: '#08EED9'
                },
                {
                    id: 2,
                    groupName: 'Group 2',
                    color: '#66D06C'
                },
                {
                    id: 3,
                    groupName: 'Group 3',
                    color: '#ACBBC2'
                }
            ]
        }
    ]);
}(window.angular));
