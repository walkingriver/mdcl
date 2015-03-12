(function () {
    angular.module('mdcl', ['ionic'])
        .controller('SwimController', ['$scope', SwimController])
        .run(startup)
        .config(config);

    function startup ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    }

    function SwimController($scope) {
        var vm = this;

        vm.title = 'MDCL';
    }

    function config($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('index', {
                url: '',
                templateUrl: 'templates/home.html',
                controller: 'SwimController as vm',
                controllerAs: 'vm'
        });
    }
})();
