angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('MaquinariaCtrl', function($scope, $stateParams, Inventarios) {
  var inventarioPromise =  Inventarios.todos();
	
	inventarioPromise.then(function(responses){
	  $scope.maquinarias= responses.data;
	  for (var i = 0; i < $scope.maquinarias.length; i++) {
		if ($scope.maquinarias[i].id ==$stateParams.maqId) {
		  $scope.maquina=$scope.maquinarias[i];
		}
	  }	  
	},function(error){
	  console.log(error);
	})
	
})

.controller('InventarioCtrl', function($scope,Inventarios) {
	var inventarioPromise =  Inventarios.todos();
	
	inventarioPromise.then(function(response){
	  $scope.inventario= response.data;
	  //console.log($scope.inventario)
	  //console.log(response)
	},function(error){
	  console.log(error);
	})
})
.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
