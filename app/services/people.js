(function (ng) {
    ng.module('buildconTest').factory('peopleService', [
        '$http',
        function ($http) {
            return {
                all: function() {
                    return $http.get('/data/people.json');
                },

                getPerson: function(personId) {
                    return $http.get('/data/people.json').then(function(response) {
                        return response.data[personId - 1];
                    })
                }
            };
        }
    ]);
}(window.angular));