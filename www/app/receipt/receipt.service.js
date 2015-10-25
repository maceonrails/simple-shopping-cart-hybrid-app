(function() {
    'use strict';

    angular
        .module('app.cart')
        .factory('receiptService', receiptService);

    receiptService.$inject = [];

    /* @ngInject */
    function receiptService() {
    	var service = {
            getTotalSales: getTotalSales,
            getTotalTaxes: getTotalTaxes,
            getPriceWithTaxes: getPriceWithTaxes,
        };
        return service;

		function getTotalSales (cart) {
			var total = 0
		    for ( var i = 0, _len = cart.length; i < _len; i++ ) {
		        total += parseFloat(getPriceWithTaxes(cart[i]))
		    }
		    return total.toFixed(2)
		}

        function getTotalTaxes (cart) {
            var total = 0
            for ( var i = 0, _len = cart.length; i < _len; i++ ) {
                total += getTaxes(cart[i])
            }
            return total.toFixed(2)
        }

        function getTaxes (item) {
            var product = item.product
            var rate = 0
            for ( var i = 0, _len = product.taxes.length; i < _len; i++ ) {
                rate += parseFloat(product.taxes[i].rate)
            }
            if (product.tax) {
                rate += parseFloat(product.tax.rate)
            }
            return (Math.ceil(rate * product.price * item.quantity * 20)/20)
        }

        function getPriceWithTaxes (item) {
            return (getTaxes(item) + getTotalItemPrice(item)).toFixed(2)
        }

        function getTotalItemPrice (item) {
            return item.product.price * item.quantity
        }

    }
})();