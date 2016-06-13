'use strict';
(function() {

    var HomeController = function($scope) {

    };

    HomeController.prototype.date = {
        value: new Date(),
        opened: false,
        options: {
            formatYear: 'yy',
            maxDate: new Date(2020, 5, 22),
            minDate: new Date(),
            startingDay: 1
        },
        open: function() {
            this.opened = true;
        }
    };

    HomeController.$inject = [ '$scope' ];

    app.controller('HomeController', HomeController);

})();
