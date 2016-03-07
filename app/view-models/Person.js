(function (ng) {
    ng.module('buildconTest').factory('Person', [
        function () {
            var tagColors = ['#38A8F1', '#9B58B7', '#F17303'];
            var photoColors = ['#9A59B9', '#0F9BF2', '#A1ADB9'];
            var mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
            function Person(person) {
                ng.extend(this, person);
                var initials = this.first_name[0] + this.last_name[0];

                this.favourite = this.favourite ? true : false;

                if (this.profile_picture) {
                    var number = Math.floor((Math.random() * 40) + 20);
                    var gender = this.gender == 'Male' ? 'men' : 'women';
                    this.profilePhotoUrl = 'http://api.randomuser.me/portraits/' +gender+ '/' +number+ '.jpg';
                } else {
                    this.initials = initials.toUpperCase();
                    this.photoBackgroundColor = photoColors[number = Math.floor((Math.random() * 3))];
                }
                this.profilePhotoUrl = this.profilePhotoUrl ? this.profilePhotoUrl : 'http://rmiaconf.selectbytes.net/wp-content/themes/rmiaconference/library/images/user-profile-placeholder.png';

                this.genderIcon = this.gender == 'Male' ? 'fa-mars' : 'fa-venus';

                var dob = new Date(this.dob);

                this.dobDisplay = dob.getDate() + ' ' + mS[dob.getMonth()] + ' ' + dob.getFullYear();

                this.tagColor = this.tag_id ? tagColors[this.tag_id - 1] : 'transparent';
                this.isSelected = false;
                this.isDisabled = false;

                this.username = (this.first_name[0] + this.last_name).toLowerCase();
                this.facebook = this.username + '@facebook.com';
                this.twitter = this.username + '@twitter.com';
                this.googleplus = this.username + '@gplus.com';
                this.pinterest = this.username + '@pinterest.com';
            }

            return Person;
        }]);
}(window.angular));
