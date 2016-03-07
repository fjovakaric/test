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
                    scope.lastActivity = undefined;

                    function getFeeds() {
                        scope.feeds = [];
                        feedsService.getForPerson(scope.activePerson.id).then(function(response) {
                            response.forEach(function(feed) {
                                scope.feeds.push(new Feed(feed));
                            });
                            setLastActivity();

                            scope.feeds.forEach(function(feed) {
                                peopleService.getPerson(feed.reciever_id).then(function(reciever) {
                                    feed.reciever = new Person(reciever);
                                });
                            })
                        });
                    }

                    function setLastActivity() {
                        if (!scope.feeds.length) {
                            scope.lastActivity = undefined;
                            return;
                        }
                        scope.lastActivity = new Date(0);
                        scope.feeds.forEach(function(feed) {
                            if (feed.feedDate > scope.lastActivity) {
                                scope.lastActivity = feed.feedDate;
                            }
                        })
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
