(function () {
    'use strict';

    angular.module('mdcl')
        .factory('swimServiceFactory', ['$q', swimService]);

    swimService.$inject = [];

    function swimService($q) {
        var db;

        var units = 'yards';
        var workouts;
        var service = {
            initDb: initDb,
            getWorkout: getWorkouts,
            getDetail: getDetail,
            completeWorkout: completeWorkout,
            resetWorkout: resetWorkout,
            units: function (unitsToSet) {
                if (unitsToSet) {
                    units = unitsToSet;
                } else {
                    return units;
                }
            }
        };

        init();
        return service;

        function init() {
        }

        function initDb() {
            db = new PouchDB('mdcl');

            return $q.when(db.info().then(function (result) {
                // handle result
                if (!result.doc_count) {
                    seedWorkouts();
                }
            }).catch(function (err) {
                console.log(err);
            }));
        }
        
        /**
         * Adds a new workout to the database
         */
        function addWorkout(workout) {
            return $q.when(db.post(workout));
        }

        /**
         * Saves an existing workout
         */
        function updateWorkout(workout) {
            return $q.when(db.put(workout));
        }

        /**
         * Retrieves all workouts
         */
        function getWorkouts() {
            if (!workouts) {
                return $q.when(db.allDocs({ include_docs: true }))
                    .then(function (docs) {
                        // Each row has a .doc object and we just want to send an 
                        // array of birthday objects back to the calling controller,
                        // so let's map the array to contain just the .doc objects.
                        workouts = docs.rows.map(function (row) {
                            // Dates are not automatically converted from a string.
                            row.doc.completed = row.doc.completed ? new Date(row.doc.completed) : null;
                            return row.doc;
                        });

                        // Listen for changes on the database.
                        db.changes({ live: true, since: 'now', include_docs: true })
                            .on('change', onDatabaseChange);

                        return workouts;
                    });
            } else {
                return $q.when(workouts);
                //createNewWorkout();
            }
        }

        function onDatabaseChange(change) {

        }

        function getDetail(id) {
            var result = workouts[id - 1];
            return result;
        }

        function completeWorkout(workout, completedAt) {
            workout.completed = completedAt || moment.now();
            $localStorage.mdcl_workout = workouts;
        }

        function resetWorkout(workout) {
            workout.completed = null;
            $localStorage.mdcl_workout = workouts;
        }

        function seedWorkouts() {
            db.bulkDocs(
             [
                {
                    _id: '01',
                    week: 1,
                    day: 1,
                    completed: null,
                    reps: [{ qty: 4, distance: 100, rest: 12 }, { qty: 4, distance: 50, rest: 8 }, {
                        qty: 4,
                        distance: 25,
                        rest: 4
                    }]
                },
                {
                    _id: '02',
                    week: 1,
                    day: 2,
                    completed: null,
                    reps: [{ qty: 4, distance: 100, rest: 12 }, { qty: 4, distance: 50, rest: 8 }, {
                        qty: 4,
                        distance: 25,
                        rest: 4
                    }]
                },
                {
                    _id: '03',
                    week: 1,
                    day: 3,
                    completed: null,
                    reps: [{ qty: 4, distance: 100, rest: 12 }, { qty: 4, distance: 50, rest: 8 }, {
                        qty: 4,
                        distance: 25,
                        rest: 4
                    }]
                },
                {
                    _id: '04',
                    week: 2,
                    day: 1,
                    completed: null,
                    reps: [{ qty: 1, distance: 200, rest: 12 }, { qty: 4, distance: 100, rest: 10 }, {
                        qty: 4,
                        distance: 50,
                        rest: 6
                    }, { qty: 4, distance: 25, rest: 4 }]
                },
                {
                    _id: '05',
                    week: 2,
                    day: 2,
                    completed: null,
                    reps: [{ qty: 1, distance: 200, rest: 12 }, { qty: 4, distance: 100, rest: 10 }, {
                        qty: 4,
                        distance: 50,
                        rest: 6
                    }, { qty: 4, distance: 25, rest: 4 }]
                },
                {
                    _id: '06',
                    week: 2,
                    day: 3,
                    completed: null,
                    reps: [{ qty: 1, distance: 200, rest: 12 }, { qty: 4, distance: 100, rest: 10 }, {
                        qty: 4,
                        distance: 50,
                        rest: 6
                    }, { qty: 4, distance: 25, rest: 4 }]
                },
                {
                    _id: '07',
                    week: 3,
                    day: 1,
                    completed: null,
                    reps: [{ qty: 1, distance: 400, rest: 12 }, { qty: 1, distance: 200, rest: 10 }, {
                        qty: 4,
                        distance: 100,
                        rest: 8
                    }, { qty: 4, distance: 50, rest: 4 }]
                },
                {
                    _id: '08',
                    week: 3,
                    day: 2,
                    completed: null,
                    reps: [{ qty: 1, distance: 400, rest: 12 }, { qty: 1, distance: 200, rest: 10 }, {
                        qty: 4,
                        distance: 100,
                        rest: 8
                    }, { qty: 4, distance: 50, rest: 4 }]
                },
                {
                    _id: '09',
                    week: 3,
                    day: 3,
                    completed: null,
                    reps: [{ qty: 1, distance: 400, rest: 12 }, { qty: 1, distance: 200, rest: 10 }, {
                        qty: 4,
                        distance: 100,
                        rest: 8
                    }, { qty: 4, distance: 50, rest: 4 }]
                },
                {
                    _id: '10',
                    week: 4,
                    day: 1,
                    completed: null,
                    reps: [{ qty: 1, distance: 600, rest: 10 }, { qty: 1, distance: 300, rest: 8 }, {
                        qty: 4,
                        distance: 100,
                        rest: 6
                    }, { qty: 4, distance: 50, rest: 4 }]
                },
                {
                    _id: '11',
                    week: 4,
                    day: 2,
                    completed: null,
                    reps: [{ qty: 1, distance: 600, rest: 10 }, { qty: 1, distance: 300, rest: 8 }, {
                        qty: 4,
                        distance: 100,
                        rest: 6
                    }, { qty: 4, distance: 50, rest: 4 }]
                },
                {
                    _id: '12',
                    week: 4,
                    day: 3,
                    completed: null,
                    reps: [{ qty: 1, distance: 600, rest: 10 }, { qty: 1, distance: 300, rest: 8 }, {
                        qty: 4,
                        distance: 100,
                        rest: 6
                    }, { qty: 4, distance: 50, rest: 4 }]
                },
                {
                    _id: '13',
                    week: 5,
                    day: 1,
                    completed: null,
                    reps: [{ qty: 1, distance: 1000, rest: 8 }, { qty: 4, distance: 100, rest: 4 }, {
                        qty: 4,
                        distance: 50,
                        rest: 4
                    }]
                },
                {
                    _id: '14',
                    week: 5,
                    day: 2,
                    completed: null,
                    reps: [{ qty: 1, distance: 1000, rest: 8 }, { qty: 4, distance: 100, rest: 4 }, {
                        qty: 4,
                        distance: 50,
                        rest: 4
                    }]
                },
                {
                    _id: '15',
                    week: 5,
                    day: 3,
                    completed: null,
                    reps: [{ qty: 1, distance: 1000, rest: 8 }, { qty: 4, distance: 100, rest: 4 }, {
                        qty: 4,
                        distance: 50,
                        rest: 4
                    }]
                },
                {
                    _id: '16',
                    week: 6,
                    day: 1,
                    completed: null,
                    reps: [{ qty: 1, distance: 1200, rest: 6 }, { qty: 3, distance: 100, rest: 4 }, {
                        qty: 3,
                        distance: 50,
                        rest: 4
                    }]
                },
                {
                    _id: '17',
                    week: 6,
                    day: 2,
                    completed: null,
                    reps: [{ qty: 1, distance: 1200, rest: 6 }, { qty: 3, distance: 100, rest: 4 }, {
                        qty: 3,
                        distance: 50,
                        rest: 4
                    }]
                },
                { _id: '18', week: 6, day: 3, completed: null, reps: [{ qty: 1, distance: 1650 }] }
            ]);
        }
    }
})();