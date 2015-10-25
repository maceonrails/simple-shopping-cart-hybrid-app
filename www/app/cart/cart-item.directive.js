(function() {
    'use strict';

    angular
        .module('app.cart')
        .directive('cbCartItem', cbCartItem);

    cbCartItem.$inject = [];

    /* @ngInject */
    function cbCartItem() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: {
                item: '=',
                showDelete: '='
            },
            controller: CartItemController,
            controllerAs: 'vm',
            templateUrl: 'app/cart/cart-item.html',
            link: link,
            restrict: 'EA',
            scope: true
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }

    CartItemController.$inject = ['$rootScope', 'cartService']

    /* @ngInject */
    function CartItemController($rootScope, cartService) {
        var vm = this;
        vm.getTotalPrice = getTotalPrice
        vm.getFullItemInfo = getFullItemInfo
        vm.removeFromCart = removeFromCart

        function removeFromCart (item) {
            cartService.removeFromCart(item)
            $rootScope.$broadcast('cart-changed');
        }

        function getFullItemInfo(item) {
            return cartService.getFullItemInfo(item)
        }

        function getTotalPrice (item) {
            return cartService.getTotalPrice(item)
        }

    }
})();