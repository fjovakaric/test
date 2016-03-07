(function (ng) {
    ng.module('buildconTest').factory('Feed', [
        function () {
            var actions = [
                {
                    actionName: 'sent a message',
                    color: '#9959BB',
                    icon: 'fa-envelope',
                    medium: 'via Gmail',
                    status: 'Replied',
                    moreAction: 'Read',
                    reply: 'replied in 4 mins'
                },
                {
                    actionName: 'placed an Order on',
                    color: '#92C46D',
                    icon: 'fa-file-text-o',
                    medium: 'Name of the site',
                    status: 'Delivered',
                    moreAction: 'Detail',
                    reply: 'placed this order'
                },
                {
                    actionName: 'made an Inquiry on',
                    color: '#FFD350',
                    icon: 'fa-question-circle',
                    medium: 'Name of the site',
                    status: 'Replied',
                    moreAction: 'Detail',
                    reply: 'replied this inquiry'
                }
            ];
            function Feed(feed) {
                ng.extend(this, feed);

                this.action = actions[this.action_id -1];

                this.feedDate = new Date(this.date + ' ' + this.time);

            }

            return Feed;
        }]);
}(window.angular));
