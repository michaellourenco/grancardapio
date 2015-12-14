//'use strict';


angular


    .module('app.cardapio', ['angularFileUpload'])


    .controller('CardapioCtrl', ['$scope', 'FileUploader','$http','$ionicModal', '$timeout', '$stateParams','$location','$log','$templateCache', function($scope, FileUploader,$http, $ionicModal, $timeout, $stateParams,$location,$log,$templateCache) {
     $templateCache.removeAll();
     
      namespace = $stateParams.namespace;
      
      carregarCardapio = function (namespace){
        $http.get("cardapios/"+namespace+".phtml", { headers: { 'Cache-Control' : 'no-cache' } }).success(function (data) {
          $scope.cardapio = data; 
          var categorias = $scope.cardapio.categorias;     
        }).error(function (data, status) {
          $scope.message = "Aconteceu um problema: " + data;
        });

      };

      carregarCardapio(namespace);

      $scope.editarCardapio = function (cardapio,item){
        if(item!= null){

            }else{
            $http.post("editarcardapio.php", cardapio).success(function (data) {
              $location.path("/app/cardapio/"+namespace);
            });
        }
      };

      $scope.adicionarItem = function (cardapio){
        $http.post("editarcardapio.php", $scope.cardapio).success(function (data) {
          delete $scope.cardapios;
          $scope.cardapioEdit.$setPristine();
          $location.path("#/app/cardapio/"+namespace);
        });
      };

      $scope.apagarItem = function (indiceItem,indiceCategoria){
        $scope.cardapio != $scope.cardapio.categorias[indiceCategoria].itens.splice(indiceItem,1);      
        $http.post("editarcardapio.php", $scope.cardapio).success(function (data) {
          /*delete $scope.cardapio;*/
          $location.path("/app/cardapio/"+namespace);
        });
      };

      $scope.apagarCategoria = function (indiceCategoria){
        $scope.cardapio != $scope.cardapio.categorias.splice(indiceCategoria,1);      
        $http.post("editarcardapio.php", $scope.cardapio).success(function (data) {
          /*delete $scope.cardapio;*/
          $location.path("/app/cardapio/"+namespace);
        });
      };

      $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
      };

      var uploader = $scope.uploader = new FileUploader({
          url: 'upload.php'
          //formData:$scope.cardapio
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
          
          fileItem.formData[0].logo = fileItem.file.name;

          informacao = fileItem.formData[0];
          $http.post("editarcardapio.php", informacao).success(function (data) {
            /*delete $scope.cardapio;
            $scope.categoriaForm.$setPristine();*/
             $location.path("/app/cardapio/"+namespace);
          });
        };

        uploader.onCompleteAll = function() {
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