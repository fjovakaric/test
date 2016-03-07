(function (ng) {
    ng.module('buildconTest').factory('feedsService', [
        '$http',
        function ($http) {
            return {
                all: function() {
                    return $http.get('/data/feeds.json');
                },

                getForPerson: function(personId) {
                    return $http.get('/data/feeds.json').then(function(response) {
                        var feeds = response.data.filter(function(feed) {
                            if (feed.person_id == personId) {
                                return feed;
                            }
                        });

                        return feeds;
                    })
                }
            };
        }
    ]);
}(window.angular));