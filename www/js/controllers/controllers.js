angular.module('app.controllers', ['angularFileUpload'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
 
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('BrowseCtrl', function($scope) {
$scope.cardapio=[];
$scope.title = "Dynamischer Titel";


})


/*.controller('EditarCardapioCtrl', function($scope, $http, $stateParams,$location) {
$scope.cardapio=[];
    console.log($stateParams.namespace);

  namespace = $stateParams.namespace;

      carregarCardapio = function (namespace){
        $http.get("cardapios/"+namespace+".phtml").success(function (data) {
          console.log(data);
          $scope.cardapio = data;     

          
        }).error(function (data, status) {
          $scope.message = "Aconteceu um problema: " + data;
        });

      };

  

      $scope.editarCardapio = function (cardapio){
        $http.post("editarcardapio.php", cardapio).success(function (data) {
          delete $scope.cardapios;
          $scope.cardapioEdit.$setPristine();
                   $location.path("#/app/cardapios");
        });
  

      };

      carregarCardapio(indice);

})*/

/*.controller('NovaCategoriaCtrl', function($scope, $http, $stateParams,$location) {
$scope.cardapio=[];
    console.log($stateParams.namespace);

  namespace = $stateParams.namespace;


      carregarCardapio = function (namespace){
        $http.get("cardapios/"+namespace+".phtml").success(function (data) {
          console.log(data);
          $scope.cardapio = data;     

          
        }).error(function (data, status) {
          $scope.message = "Aconteceu um problema: " + data;
        });

      };



      $scope.novaCategoria = function (categoria){
        $scope.cardapio.categorias.push(categoria);
        $http.post("editarcardapio.php", $scope.cardapio).success(function (data) {*/
          /*delete $scope.cardapio;
          $scope.categoriaForm.$setPristine();*/
                  /*  $location.path("#/app/cardapios");
        });
      };

      carregarCardapio(namespace);


})*/

/*.controller('NovoCardapioCtrl', function($scope, $http, $stateParams,$location) {

      $scope.adicionarCardapio = function (cardapio) {
        console.log("antes:"+cardapio);

        $http.post("novocardapio.php", cardapio).success(function (data) {
          console.log("depois:"+cardapio);*/
         /* delete $scope.cardapios;
          $scope.cardapioForm.$setPristine();*/
        /* $location.path("#/app/cardapios");
        });
      };


})*/
/*.controller('NovoItemCtrl', function($scope, $http, $stateParams,$location) {
$scope.cardapio=[];
    console.log($stateParams.namespace);

  namespace = $stateParams.namespace;
  id = $stateParams.id;


      carregarCardapio = function (namespace){
        $http.get("cardapios/"+namespace+".phtml").success(function (data) {
          console.log(data);
          $scope.cardapio = data;     

          
        }).error(function (data, status) {
          $scope.message = "Aconteceu um problema: " + data;
        });

      };

      carregarCardapio(namespace);


      $scope.adicionarItem = function (item){
        console.log($scope.cardapio.categorias[$stateParams.id].itens != null);
        console.log($stateParams.id);
        if($scope.cardapio.categorias[$stateParams.id].itens != null){
          $scope.cardapio.categorias[$stateParams.id].itens.push(item);
        }else{
          $scope.cardapio.categorias[$stateParams.id].itens = [];
          $scope.cardapio.categorias[$stateParams.id].itens.push(item);
        };
        $http.post("editarcardapio.php", $scope.cardapio).success(function (data) {*/
          /*delete $scope.cardapio;*/
          /*$scope.categoriaForm.$setPristine();*/
        /*  $location.path("/app/cardapio/"+namespace);
          console.log($location.path());
        });


      };
})*/

.controller('EditarItemCtrl', function($scope, $http, $stateParams,$location) {
$scope.cardapio=[];

});

/*.controller('CardapioCtrl', function($scope, $http, $stateParams,$location) {
$scope.cardapio=[];
    console.log($stateParams.namespace);

  namespace = $stateParams.namespace;



      carregarCardapio = function (namespace){
        $http.get("cardapios/"+namespace+".phtml").success(function (data) {
          console.log(data);
          $scope.cardapio = data; 
          var categorias = $scope.cardapio.categorias;    
          console.log(categorias);
          
        }).error(function (data, status) {
          $scope.message = "Aconteceu um problema: " + data;
        });

      };
            carregarCardapio(namespace);



      $scope.editarCardapio = function (cardapio){
        $http.post("editarcardapio.php", cardapio).success(function (data) {
      
          delete $scope.cardapios;
          $scope.cardapioEdit.$setPristine();
          $location.path("#/app/cardapios");
        });
  

      };



      $scope.adicionarItem = function (cardapio){
        $http.post("editarcardapio.php", $scope.cardapio).success(function (data) {
          delete $scope.cardapios;
          $scope.cardapioEdit.$setPristine();
          $location.path("#/app/cardapios");
        });
  

      };
      $scope.apagarItem = function (indiceItem,indiceCategoria){
        $scope.cardapio != $scope.cardapio.categorias[indiceCategoria].itens.splice(indiceItem,1);      
        $http.post("editarcardapio.php", $scope.cardapio).success(function (data) {*/
          /*delete $scope.cardapio;*/
        /*  $location.path("/cardapio/"+namespace);
        });
      };
      $scope.apagarCategoria = function (indiceCategoria){
        $scope.cardapio != $scope.cardapio.categorias.splice(indiceCategoria,1);      
        $http.post("editarcardapio.php", $scope.cardapio).success(function (data) {*/
          /*delete $scope.cardapio;*/
          /*$location.path("/admcardapio/"+namespace);
        });
      };
      $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
      };*/


