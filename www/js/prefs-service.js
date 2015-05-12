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
            var prefs = $localStorage.mdcl_prefs ||
                resetPrefs();

            if (!prefs.units) { prefs.units = 'yards'; }
            if (!prefs.poolLength) { prefs.poolLength = 25; }
            
            return prefs;
        }

        function resetPrefs() {
            var prefs = { units: 'yards', poolLength: 25 };
            $localStorage.mdcl_prefs = prefs;
            return prefs;
        }
    }
})();