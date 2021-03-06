//'use strict';


angular


  .module('app.novoitem', ['angularFileUpload'])

  .controller('NovoItemCtrl',  ['$scope', 'FileUploader','$http','$ionicModal', '$timeout', '$stateParams','$location', function($scope, FileUploader,$http, $ionicModal, $timeout, $stateParams,$location) {
   

  console.log($stateParams.namespace);
console.log($stateParams.id);

  namespace = $stateParams.namespace;
  id = $stateParams.id;

      carregarCardapio = function (namespace){
        $http.get("cardapios/"+namespace+".phtml", { headers: { 'Cache-Control' : 'no-cache' } }).success(function (data) {
          console.log(data);
          $scope.cardapio = data; 
                    $scope.categoria = data.categorias[$stateParams.id];    
                console.log($scope.categoria.titulo);
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
        $http.post("editarcardapio.php", $scope.cardapio).success(function (data) {
          /*delete $scope.cardapio;*/
          /*$scope.categoriaForm.$setPristine();*/
          $location.path("/app/cardapio/"+namespace);
          console.log($location.path());
        });


      };


      $scope.novaCategoria = function (categoria){
        $scope.cardapio.categorias.push(categoria);
        $http.post("editarcardapio.php", $scope.cardapio).success(function (data) {
          /*delete $scope.cardapio;
          $scope.categoriaForm.$setPristine();*/
                    $location.path("#/app/cardapios");
        });
      };

      carregarCardapio(namespace);
      $scope.adicionarCardapio = function (cardapio) {
        console.log("antes:"+cardapio);

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

        uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
            console.info('onWhenAddingFileFailed', item, filter, options);
        };
        uploader.onAfterAddingFile = function(fileItem) {
            console.info('onAfterAddingFile', fileItem);
        };
        uploader.onAfterAddingAll = function(addedFileItems) {
            console.info('onAfterAddingAll', addedFileItems);
        };
        uploader.onBeforeUploadItem = function(item) {
            console.info('onBeforeUploadItem', item);
        };
        uploader.onProgressItem = function(fileItem, progress) {
            console.info('onProgressItem', fileItem, progress);
        };
        uploader.onProgressAll = function(progress) {
            console.info('onProgressAll', progress);
        };
        uploader.onSuccessItem = function(fileItem, response, status, headers) {
            console.info('onSuccessItem', fileItem, response, status, headers);
        };
        uploader.onErrorItem = function(fileItem, response, status, headers) {
            console.info('onErrorItem', fileItem, response, status, headers);
        };
        uploader.onCancelItem = function(fileItem, response, status, headers) {
            console.info('onCancelItem', fileItem, response, status, headers);
        };
        uploader.onCompleteItem = function(fileItem, response, status, headers) {
            console.info('onCompleteItem', fileItem, response, status, headers);
            console.info('onCompleteITem',fileItem.file.name);
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