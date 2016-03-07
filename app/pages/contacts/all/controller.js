(function (ng) {
    ng.module('buildconTest').directive('contactsAll', [
        'peopleService',
        'Person',
        function (peopleService, Person) {
            return {
                restrict: 'A',
                scope: {},
                templateUrl: 'app/pages/contacts/all/view.html',
                link: function (scope, element, attrs) {
                    scope.people = undefined;
                    scope.filteredPeople = undefined;
                    scope.activePerson = undefined;
                    scope.searchWord = undefined;

                    scope.tabs = [
                        {
                            heading: 'People',
                            active: true
                        },
                        {
                            heading: 'Companies',
                            active: false
                        }
                    ];
                    scope.changeTab = function(activeTab) {
                        scope.tabs.forEach(function(tab) {
                            tab.active = (tab.heading == activeTab.heading);
                        })
                    };

                    peopleService.all().then(function(response) {
                        scope.people = [];
                        response.data.forEach(function(person) {
                            scope.people.push(new Person(person));
                        });
                        scope.filteredPeople = ng.copy(scope.people);
                        scope.activePerson = scope.people[0];
                    });

                    scope.filterContacts = function() {
                        if (!scope.searchWord) {
                            scope.filteredPeople = ng.copy(scope.people);
                            return;
                        }

                        var searchWord = scope.searchWord.toLowerCase();
                        scope.filteredPeople = scope.people.filter(function(person) {
                            var searchData =   person.first_name.toLowerCase()
                                             + person.last_name.toLowerCase()
                                             + person.email.toLowerCase()
                                             + person.company.toLowerCase()
                                             + person.job_title.toLowerCase();

                            if (searchData.search(searchWord) > -1) {
                                return person;
                            }
                        });
                    };


                    var cleanUp = scope.$on('changeActivePerson', function(e, person) {
                        scope.activePerson = person;
                    });

                    scope.$on('$destroy', function(){
                        cleanUp();
                    })
                }
            };
        }
    ])
}(window.angular));
