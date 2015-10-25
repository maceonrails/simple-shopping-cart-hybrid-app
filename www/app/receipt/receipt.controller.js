(function() {
    'use strict';

    angular
        .module('app.receipt')
        .controller('ReceiptController', ReceiptController);

    ReceiptController.$inject = ['cartService', 'receiptService'];

    /* @ngInject */
    function ReceiptController(cartService, receiptService) {
        var vm = this
        vm.cart = cartService.cart
        vm.getTotalSales = getTotalSales
        vm.getTotalTaxes = getTotalTaxes
        vm.getFullItemInfo = getFullItemInfo
        vm.getPriceWithTaxes = getPriceWithTaxes
        vm.showDelete = false

        activate()

        function activate() {
        }

        function getTotalSales (cart) {
            return receiptService.getTotalSales(cart)
        }

        function getTotalTaxes (cart) {
            return receiptService.getTotalTaxes(cart)
        }

        function getFullItemInfo (item) {
            return cartService.getFullItemInfo(item)
        }

        function getPriceWithTaxes (item) {
            return receiptService.getPriceWithTaxes(item)
        }
    }
})();