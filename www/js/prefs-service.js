(function () {
    'use strict';

    angular.module('mdcl')
        .factory('prefsServiceFactory', ['$localStorage', prefsService]);

    prefsService.$inject = [];

    function prefsService($localStorage) {
        var units = 'yards';
        var service = {
            getPrefs: getPrefs,
            resetPrefs: resetPrefs
        };

        init();
        return service;

        function init() {
        }

        function getPrefs() {
            return $localStorage.mdcl_prefs ||
                resetPrefs();
        }

        function resetPrefs() {
            var prefs = {units: 'yards', poolLength: 25};
            $localStorage.mdcl_prefs = prefs;
            return prefs;
        }
    }
})();