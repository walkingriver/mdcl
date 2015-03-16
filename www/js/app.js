(function () {
    angular.module('mdcl', ['ionic', 'ngStorage'])
        .controller('SwimController', ['swimServiceFactory', SwimController])
        .controller('WorkoutController', ['swimServiceFactory', WorkoutController])
        .run(startup)
        .config(config);

    function startup($ionicPlatform) {
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

    function SwimController() {
        var vm = this;

        vm.title = 'MDCL';
    }

    function WorkoutController(swimService) {
        var vm = this;

        vm.title = 'Workouts';
        vm.workouts = swimService.getWorkout();
        vm.units = swimService.units() || 'yards';
        vm.numberCompleted = function() {
            return vm.workouts.filter(function(e){return e.completed}).length;
        };
        vm.dateCompleted = function(workout) {
            return moment(workout.completed).fromNow();
        };
    }

    function config($stateProvider, $urlRouterProvider) {
        $stateProvider.state('index', {
            url: '',
            templateUrl: 'templates/home.html',
            controller: 'SwimController as vm'
        }).state('list', {
            url: 'list',
            templateUrl: 'templates/list.html',
            controller: 'WorkoutController as vm'
        });
    }
})();
