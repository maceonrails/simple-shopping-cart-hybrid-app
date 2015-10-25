
(function() {
    'use strict';

    angular
        .module('app.tab')
        .controller('TabController', TabController);

    TabController.$inject = ['$scope', 'cartService'];

    /* @ngInject */
    function TabController($scope, cartService) {
        var vm = this;
        vm.badgeCount = 0
        vm.activate = activate

        activate();

        function activate() {
        	vm.badgeCount = cartService.cartCount()
        }

        $scope.$on('cart-changed', function(event, args) {
				    activate();
				});
    }
})();