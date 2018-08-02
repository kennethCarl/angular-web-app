app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("rooms");
    $locationProvider.hashPrefix('');

    $stateProvider.state({
        name: 'RoomsPage',
        url: '/rooms',
        templateUrl: 'angular-assets/views/rooms.html',
        controller: 'RoomsController'
    });

    $stateProvider.state({
        name: 'AdminPage',
        url: '/admin',
        templateUrl: '/app/views/admin.html',
        controller: 'adminController'
    });

    $stateProvider.state({
        name: 'PerformanceEvaluationPage',
        url: '/Home/Evaluation',
        templateUrl: '/app/views/perfevaluation.html',
        controller: 'perfevaluationController'
    });

    $stateProvider.state({
        name: 'TeamListPage',
        url: '/Home/Teams',
        templateUrl: '/app/views/myteams.html',
        controller: 'myteamsController'
    });

    $stateProvider.state({
        name: 'EvaluationPage',
        url: '/Home/Index/Evaluation',
        templateUrl: '/app/views/perfevaluation.html',
        controller: 'perfevaluationController'
    });
}]);