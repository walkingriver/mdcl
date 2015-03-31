(function () {
    angular.module('mdcl', ['ionic', 'ngStorage'])
        .controller('SwimController', ['swimServiceFactory', SwimController])
        .controller('WorkoutController', ['$ionicActionSheet', '$state', 'swimServiceFactory', WorkoutController])
        .controller('DetailController', ['$scope', '$state', '$stateParams', '$ionicPopup', 'swimServiceFactory', DetailController])
        .run(startup)
        .config(config);

    function startup($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            ;
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
            ;
        });
    }

    function SwimController() {
        var vm = this;

        vm.title = 'MDCL';
    }

    function WorkoutController($ionicActionSheet, $state, swimService) {
        var vm = this;

        vm.title = 'Workouts';
        vm.workouts = swimService.getWorkout();
        vm.units = swimService.units() || 'yards';
        vm.numberCompleted = function () {
            return vm.workouts.filter(function (e) {
                return e.completed
            }).length;
        };
        vm.dateCompleted = function (workout) {
            return moment(workout.completed).fromNow();
        };
        vm.action = action;

        function action(workout) {
            // Show the action sheet
            var hideSheet = $ionicActionSheet.show({
                buttons: [
                    {text: '<b>Begin Workout</b> '}
                ],
                destructiveText: workout.completed ? 'Mark Incomplete' : 'Mark Completed',
                titleText: 'Week ' + workout.week + '&mdash; Day ' + workout.day,
                cancelText: 'Cancel',
                cancel: function () {
                },
                destructiveButtonClicked: function () {
                    if (workout.completed)
                        swimService.resetWorkout(workout);
                    else
                        swimService.completeWorkout(workout, moment());

                    return true;
                },
                buttonClicked: function (index) {
                    switch (index) {
                        case 0:
                            $state.go('workout-detail', {workoutId: workout.id});
                            break;
                        default:
                            break;
                    }

                    return true;
                }
            });
        }
    }

    function DetailController($scope, $state, $stateParams, $ionicPopup, swimService) {
        var vm = this;
        var exiting = false;
        var workoutId = $stateParams.workoutId;
        vm.workout = swimService.getDetail(workoutId);
        vm.units = swimService.units();

        //$scope.$on('$stateChangeStart', preventExit);
        //
        //function preventExit(event, toState, toParams, fromState, fromParams) {
        //    if (!vm.workout.completed && !exiting) {
        //        event.preventDefault();
        //
        //        var popup = $ionicPopup.show({
        //            template: '<p>Are you sure you want to exit the workout?</p>',
        //            title: 'Exit Workout?',
        //            subTitle: 'Did you complete the entire workout?',
        //            buttons: [
        //                {text: 'Complete', onTap: markComplete},
        //                {text: 'Cancel', onTab: exitWorkout}
        //            ]
        //        });
        //    }
        //}
        //
        //function markComplete() {
        //    vm.workout.completed = moment();
        //    exitWorkout();
        //}
        //
        //function exitWorkout() {
        //    $state.goBack();
        //}
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
        }).state('workout-detail', {
            url: 'detail/:workoutId',
            templateUrl: 'templates/detail.html',
            controller: 'DetailController as vm'
        });
    }
})();
