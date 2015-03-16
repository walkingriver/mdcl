(function () {
    'use strict';

    angular.module('mdcl')
        .factory('swimServiceFactory', ['$localStorage', swimService]);

    swimService.$inject = [];

    function swimService($localStorage) {
        var units = 'yards';
        var workout;
        var service = {
            getWorkout: getWorkout,
            units: function(unitsToSet) {
                if (unitsToSet) {units = unitsToSet;} else {return units;}
            }
        };

        init();
        return service;

        function init() {
        }

        function getWorkout() {
            return /*$localStorage.mdcl_workout ||*/ createNewWorkout();
        }

        function createNewWorkout() {
         workout = [
            {week: 1, day: 1, completed: moment().day(-2), reps: [{qty:4, distance: 100}, {qty: 4, distance: 50}, {qty:4, distance: 25}]},
            {week: 1, day: 2, completed: null, reps: [{qty:4, distance: 100}, {qty: 4, distance: 50}, {qty:4, distance: 25}]},
            {week: 1, day: 3, completed: null, reps: [{qty:4, distance: 100}, {qty: 4, distance: 50}, {qty:4, distance: 25}]},
            {week: 2, day: 1, completed: null, reps: [{qty:1, distance:200}, {qty:4, distance: 100}, {qty: 4, distance: 50}, {qty:4, distance: 25}]},
            {week: 2, day: 2, completed: null, reps: [{qty:1, distance:200}, {qty:4, distance: 100}, {qty: 4, distance: 50}, {qty:4, distance: 25}]},
            {week: 2, day: 3, completed: null, reps: [{qty:1, distance:200}, {qty:4, distance: 100}, {qty: 4, distance: 50}, {qty:4, distance: 25}]},
            {week: 3, day: 1, completed: null, reps: [{qty:1, distance:400}, {qty:1, distance: 200}, {qty: 4, distance: 100}, {qty:4, distance: 50}]},
            {week: 3, day: 2, completed: null, reps: [{qty:1, distance:400}, {qty:1, distance: 200}, {qty: 4, distance: 100}, {qty:4, distance: 50}]},
            {week: 3, day: 3, completed: null, reps: [{qty:1, distance:400}, {qty:1, distance: 200}, {qty: 4, distance: 100}, {qty:4, distance: 50}]},
            {week: 4, day: 1, completed: null, reps: [{qty:1, distance:600}, {qty:1, distance: 300}, {qty: 4, distance: 100}, {qty:4, distance: 50}]},
            {week: 4, day: 2, completed: null, reps: [{qty:1, distance:600}, {qty:1, distance: 300}, {qty: 4, distance: 100}, {qty:4, distance: 50}]},
            {week: 4, day: 3, completed: null, reps: [{qty:1, distance:600}, {qty:1, distance: 300}, {qty: 4, distance: 100}, {qty:4, distance: 50}]},
            {week: 5, day: 1, completed: null, reps: [{qty:1, distance:1000}, {qty: 4, distance: 100}, {qty:4, distance: 50}]},
            {week: 5, day: 2, completed: null, reps: [{qty:1, distance:1000}, {qty: 4, distance: 100}, {qty:4, distance: 50}]},
            {week: 5, day: 3, completed: null, reps: [{qty:1, distance:1000}, {qty: 4, distance: 100}, {qty:4, distance: 50}]},
            {week: 6, day: 1, completed: null, reps: [{qty:1, distance:1200}, {qty: 3, distance: 100}, {qty:3, distance: 50}]},
            {week: 6, day: 2, completed: null, reps: [{qty:1, distance:1200}, {qty: 3, distance: 100}, {qty:3, distance: 50}]},
            {week: 6, day: 3, completed: null, reps: [{qty:1, distance:1650}]}
        ];

           // $localStorage.mdcl_workout = workout;
            return workout;
      }
    }
})();