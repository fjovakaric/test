(function(ng) {

    var buildconTest = ng.module('buildconTest', [
        'ui.router',
        'ui.bootstrap'
    ]);

    buildconTest.config([
        '$stateProvider',
        '$urlRouterProvider',
        '$locationProvider',
        function ($stateProvider, $urlRouterProvider, $locationProvider) {
            $urlRouterProvider.otherwise('/');
            $locationProvider.html5Mode(true);


            $stateProvider
                .state('contacts', {
                    url: '/',
                    templateUrl: 'app/pages/contacts/view.html'
                })
            ;

        }
    ]);

}(window.angular));

