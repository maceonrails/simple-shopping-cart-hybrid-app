(function() {
  'use strict';
  angular
    .module('app')
    .config(function($stateProvider, $urlRouterProvider) {

      // Ionic uses AngularUI Router which uses the concept of states
      // Learn more here: https://github.com/angular-ui/ui-router
      // Set up the various states which the app can be in.
      // Each state's controller can be found in controllers.js
      $stateProvider
        
        .state('tab.products', {
          url: '/products',
          views: {
            'products': {
              templateUrl: 'app/products/products.html',
              controller: 'ProductsController as vm',
            }
          }
        })
            
        .state('tab.cart', {
          url: '/cart',
          views: {
            'cart': {
              templateUrl: 'app/cart/cart.html',
              controller: 'CartController as vm',
            }
          }
        })
             
        .state('receipt', {
          url: '/receipt',
          templateUrl: 'app/receipt/receipt.html',
          controller: 'ReceiptController as vm',
        })
          
        .state('tab', {
          url: '',
          abstract: true,
          templateUrl: 'app/tab/tab.html',
          controller: 'TabController as tab'
        });

      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/products');

    });
})();