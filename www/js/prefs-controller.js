(function () {
    'use strict';

    angular
        .module('mdcl')
        .controller('PrefsController', ['prefsServiceFactory', PrefsController]);

    PrefsController.$inject = ['prefsService'];

    /* @ngInject */
    function PrefsController(prefsService)
    {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.title = 'Preferences';
        vm.reset = resetPrefs;

        activate();

        ////////////////

        function activate() {
            vm.prefs = prefsService.getPrefs();
        }

        function resetPrefs() {
            vm.prefs = prefsService.resetPrefs();
        }
    }
})();