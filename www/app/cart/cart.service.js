(function() {
    'use strict';

    angular
        .module('app.cart')
        .factory('cartService', cartService);

    cartService.$inject = [];

    /* @ngInject */
    function cartService() {
    	var cart = []
    	var service = {
            addToCart: addToCart,
            removeFromCart: removeFromCart,
            cartCount: cartCount,
            getFullItemInfo: getFullItemInfo,
            getTotalPrice: getTotalPrice,
            cart: cart
        };
        return service;

        function addToCart(product, quantity) {
        	var cartItem = {}
        	var isExists = false
        	cartItem.product = product
        	isExists = itemExists(product)

        	if (isExists !== false) {
        		cart[isExists].quantity += quantity
        	}  else {
        		cartItem.quantity = quantity
        		cart.push(cartItem)
        	}
        }

        function removeFromCart (item) {
        	cart.splice(cart.indexOf(item), 1)
        }

        function cartCount() {
        	return cart.length
        }

        function itemExists(product) {
		    for (var i = 0; i < cart.length; i++) {
		        if (cart[i].product === product) {
		            return i;
		        }
		    }
		    return false;
		}

		function getTotalPrice (item) {
			return item.product.price * item.quantity
		}

		function getFullItemInfo(item) {
        	return item.product.unit.name + " of " + getOptionalInfo(item.product) + item.product.name
        }

        function getOptionalInfo (product) {
        	return product.product_types ? _.pluck(product.product_types, 'name').join(" ") + " " : ""
        }
    }
})();