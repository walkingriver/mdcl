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
            getDetail: getDetail,
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

        function getDetail(id) {
            workout = workout || getWorkout();
            var result =  workout[id - 1];
            return result;
        }

        function createNewWorkout() {
         workout = [
             {id: 1, week: 1, day: 1, completed: moment().day(-6), reps: [{qty:4, distance: 100, rest: 12}, {qty: 4, distance: 50, rest: 8}, {qty:4, distance: 25, rest: 4}]},
             {id: 2, week: 1, day: 1, completed: moment().day(-4), reps: [{qty:4, distance: 100, rest: 12}, {qty: 4, distance: 50, rest: 8}, {qty:4, distance: 25, rest: 4}]},
             {id: 3, week: 1, day: 1, completed: moment().day(-2), reps: [{qty:4, distance: 100, rest: 12}, {qty: 4, distance: 50, rest: 8}, {qty:4, distance: 25, rest: 4}]},
            {id: 4, week: 2, day: 1, completed: null, reps: [{qty:1, distance:200, rest: 12}, {qty:4, distance: 100, rest:10}, {qty: 4, distance: 50, rest: 6}, {qty:4, distance: 25 , rest: 4}]},
            {id: 5, week: 2, day: 2, completed: null, reps: [{qty:1, distance:200, rest: 12}, {qty:4, distance: 100, rest:10}, {qty: 4, distance: 50, rest: 6}, {qty:4, distance: 25 , rest: 4}]},
            {id: 6, week: 2, day: 3, completed: null, reps: [{qty:1, distance:200, rest: 12}, {qty:4, distance: 100, rest:10}, {qty: 4, distance: 50, rest: 6}, {qty:4, distance: 25 , rest: 4}]},
            {id: 7, week: 3, day: 1, completed: null, reps: [{qty:1, distance:400, rest: 12}, {qty:1, distance: 200, rest:10}, {qty: 4, distance: 100, rest: 8}, {qty:4, distance: 50, rest: 4}]},
            {id: 8, week: 3, day: 2, completed: null, reps: [{qty:1, distance:400, rest: 12}, {qty:1, distance: 200, rest:10}, {qty: 4, distance: 100, rest: 8}, {qty:4, distance: 50, rest: 4}]},
            {id: 9, week: 3, day: 3, completed: null, reps: [{qty:1, distance:400, rest: 12}, {qty:1, distance: 200, rest:10}, {qty: 4, distance: 100, rest: 8}, {qty:4, distance: 50, rest: 4}]},
            {id: 10, week: 4, day: 1, completed: null, reps: [{qty:1, distance:600, rest: 10}, {qty:1, distance: 300, rest: 8}, {qty: 4, distance: 100, rest: 6}, {qty:4, distance: 50, rest: 4}]},
            {id: 11, week: 4, day: 2, completed: null, reps: [{qty:1, distance:600, rest: 10}, {qty:1, distance: 300, rest: 8}, {qty: 4, distance: 100, rest: 6}, {qty:4, distance: 50, rest: 4}]},
            {id: 12, week: 4, day: 3, completed: null, reps: [{qty:1, distance:600, rest: 10}, {qty:1, distance: 300, rest: 8}, {qty: 4, distance: 100, rest: 6}, {qty:4, distance: 50, rest: 4}]},
            {id: 13, week: 5, day: 1, completed: null, reps: [{qty:1, distance:1000, rest: 8}, {qty: 4, distance: 100, rest: 4}, {qty:4, distance: 50, rest: 4}]},
            {id: 14, week: 5, day: 2, completed: null, reps: [{qty:1, distance:1000, rest: 8}, {qty: 4, distance: 100, rest: 4}, {qty:4, distance: 50, rest: 4}]},
            {id: 15, week: 5, day: 3, completed: null, reps: [{qty:1, distance:1000, rest: 8}, {qty: 4, distance: 100, rest: 4}, {qty:4, distance: 50, rest: 4}]},
            {id: 16, week: 6, day: 1, completed: null, reps: [{qty:1, distance:1200, rest: 6}, {qty: 3, distance: 100, rest: 4}, {qty:3, distance: 50, rest: 4}]},
            {id: 17, week: 6, day: 2, completed: null, reps: [{qty:1, distance:1200, rest: 6}, {qty: 3, distance: 100, rest: 4}, {qty:3, distance: 50, rest: 4}]},
            {id: 18, week: 6, day: 3, completed: null, reps: [{qty:1, distance:1650}]}
        ];

           // $localStorage.mdcl_workout = workout;
            return workout;
      }
    }
})();