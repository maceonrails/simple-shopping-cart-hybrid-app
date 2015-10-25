(function() {
    'use strict';

    angular
        .module('app.cart')
        .controller('CartController', CartController);

    CartController.$inject = ['$scope', 'cartService'];

    /* @ngInject */
    function CartController($scope, cartService) {
        var vm = this;
        vm.title = 'Cart';
        vm.cart = cartService.cart
        vm.getTotalPrice = getTotalPrice
        vm.showDelete = false;
        // $scope.badgeCount = 3

        activate();

        function activate() {
        }

        function getTotalPrice () {
            return cartService.getTotalPrice()
        }
    }
})();