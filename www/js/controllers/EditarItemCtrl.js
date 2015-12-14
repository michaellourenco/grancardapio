//'use strict';


angular


    .module('app.editaritem', ['angularFileUpload'])


    .controller('EditarItemCtrl', ['$scope', 'FileUploader','$http','$ionicModal', '$timeout', '$stateParams','$location', function($scope, FileUploader,$http, $ionicModal, $timeout, $stateParams,$location) {
 
      namespace = $stateParams.namespace;
      id = $stateParams.id;
      iditem = $stateParams.iditem;

    carregarCardapio = function (namespace){
      $http.get("cardapios/"+namespace+".phtml", { headers: { 'Cache-Control' : 'no-cache' } }).success(function (data) {
        $scope.cardapio = data;     
        $scope.item = data.categorias[$stateParams.id].itens[$stateParams.iditem];  
      }).error(function (data, status) {
        $scope.message = "Aconteceu um problema: " + data;
      });

    };

    carregarCardapio(namespace); 

     $scope.editarItem = function (item){
        $scope.cardapio != $scope.cardapio.categorias[$stateParams.id].itens.splice($stateParams.iditem,1,item);      
        $http.post("editarcardapio.php", $scope.cardapio).success(function (data) {
          /*delete $scope.cardapio;*/
          $location.path("/app/cardapio/"+namespace);
        });
      };

      $scope.editarCategoria = function (cardapio){
        $http.post("editarcardapio.php", cardapio).success(function (data) {
          delete $scope.cardapios;
          $scope.cardapioEdit.$setPristine();
          $location.path("#/app/cardapios");
        });
      };

      $scope.adicionarCardapio = function (cardapio) {

        $http.post("novocardapio.php", cardapio).success(function (data) {
          console.log("depois:"+cardapio);
         /* delete $scope.cardapios;
          $scope.cardapioForm.$setPristine();*/
          $location.path("#/app/cardapios");
        });
      };

      var uploader = $scope.uploader = new FileUploader({
          url: 'upload.php'
      });
      
      // FILTERS
      uploader.filters.push({
          name: 'customFilter',
          fn: function(item /*{File|FileLikeObject}*/, options) {
              return this.queue.length < 10;
          }
      });

      // CALLBACKS
      uploader.onBeforeUploadItem = function(item) {
        $http.get("cardapios/"+namespace+".phtml", { headers: { 'Cache-Control' : 'no-cache' } }).success(function (data) {
          mudado = {logo:"2.jpg"};      
          item.formData.push(mudado);
          item.formData.push(data);
        }).error(function (data, status) {
          $scope.message = "Aconteceu um problema: " + data;
        });
      };

      uploader.onCompleteItem = function(fileItem, response, status, headers) {
        $http.get("cardapios/"+namespace+".phtml", { headers: { 'Cache-Control' : 'no-cache' } }).success(function (data) {  

        }).error(function (data, status) {
          $scope.message = "Aconteceu um problema: " + data;
        });      
        fileItem.formData[1].categorias[$stateParams.id].itens[$stateParams.iditem].imagem = fileItem.file.name;
        informacao = fileItem.formData[1];
        $http.post("editarcardapio.php", informacao).success(function (data) {
          /*delete $scope.cardapio;
          $scope.categoriaForm.$setPristine();*/
           $location.path("/app/cardapio/"+namespace);
        });
      };

      uploader.onCompleteAll = function() {
          console.info('onCompleteAll');
      };

      console.info('uploader', uploader);

        // -------------------------------

        var controller = $scope.controller = {
            isImage: function(item) {
                var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
                return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
            }
        };
    }]);