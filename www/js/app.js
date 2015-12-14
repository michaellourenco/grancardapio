// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 
  'app.controllers',
  'app.novocardapio',
  'app.novoitem',
  'app.novacategoria',
  'app.editarcardapio',
  'app.editarcategoria',
  'app.editaritem',
  'app.cardapio',
  'app.cardapios'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    cache: false,
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })


  .state('app.search', {
    cache: false,
    url: "/search",
    views: {
      'menuContent': {
        templateUrl: "templates/search.html"
      }
    }
  })

  .state('app.browse', {
    cache: false,
    url: "/browse",
    views: {
      'menuContent': {
        templateUrl: "templates/browse.html",
        controller: 'BrowseCtrl'
      }
    }
  })
    .state('app.cardapios', {
      cache: false,
      url: "/cardapios",
      views: {
        'menuContent': {
          templateUrl: "templates/cardapios.html",
          controller: 'CardapiosCtrl'
        }
      }
    })

    .state('app.novocardapio', {
      cache: false,
      url: "/novocardapio",
      views: {
        'menuContent': {
          templateUrl: "templates/novoCardapio.html",
          controller: 'NovoCardapioCtrl'
        }
      }
    })

  .state('app.cardapio', {
    cache: false,
    url: "/cardapio/:namespace",
    views: {
      'menuContent': {
        templateUrl: "templates/cardapio.html",
        controller: 'CardapioCtrl'
      }
    }
  })
  .state('app.editarcardapio', {
    cache: false,
    url: "/editarcardapio/:namespace",
    views: {
      'menuContent': {
        templateUrl: "templates/editarCardapio.html",
        controller: 'EditarCardapioCtrl'
      }
    }
  })
  .state('app.novacategoria', {
    cache: false,
      url: "/novacategoria/:namespace",
      views: {
        'menuContent': {
          templateUrl: "templates/novaCategoria.html",
          controller: 'NovaCategoriaCtrl'
        }
      }
    })
  .state('app.editarcategoria', {
    cache: false,
      url: "/editarcategoria/:namespace/:id",
      views: {
        'menuContent': {
          templateUrl: "templates/editarCategoria.html",
          controller: 'EditarCategoriaCtrl'
        }
      }
    })
  .state('app.novoitem', {
    cache: false,
      url: "/novoitem/:namespace/:id",
      views: {
        'menuContent': {
          templateUrl: "templates/novoItem.html",
          controller: 'NovoItemCtrl'
        }
      }
    })
  .state('app.editaritem', {
    cache: false,
      url: "/editaritem/:namespace/:id/:iditem",
      views: {
        'menuContent': {
          templateUrl: "templates/editarItem.html",
          controller: 'EditarItemCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/cardapios');
});
