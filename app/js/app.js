'use strict';

var app = { };

(function() {

    app = angular.module('upload.eva-server', [ 'ngRoute', 'ngAnimate', 'ui.bootstrap' ]);

    app.config(function($routeProvider) {
        $routeProvider

            .when('/', {
                templateUrl : '/components/home/home.html',
                controller: 'HomeController as ctrl'
            })

            .otherwise({redirectTo:'/'});
    });

})();
