(function (ng) {
    ng.module('buildconTest').directive('personCommunication', [
        'feedsService',
        'peopleService',
        'Feed',
        'Person',
        function (feedsService, peopleService, Feed, Person) {
            return {
                restrict: 'E',
                scope: {
                    activePerson: '='
                },
                templateUrl: 'app/directives/person-communication/view.html',
                link: function (scope, element, attrs) {
                    scope.feeds = undefined;
                    scope.lastActivity = new Date();

                    function getFeeds() {
                        scope.feeds = [];
                        feedsService.getForPerson(scope.activePerson.id).then(function(response) {
                            response.forEach(function(feed) {
                                peopleService.getPerson(feed.reciever_id).then(function(reciever) {
                                    feed.reciever = new Person(reciever);
                                    scope.feeds.push(new Feed(feed));
                                    if (feed.feedDate < scope.lastActivity) {
                                        scope.lastActivity = feed.feedDate;
                                    }
                                });
                            });
                        });
                    }

                    getFeeds();

                    scope.$watch('activePerson', function(oldVal, newVal) {
                        if (oldVal.id != newVal.id) {
                            getFeeds();
                        }
                    })
                }
            };
        }
    ])
}(window.angular));
