var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {

  var showApp = angular.module('showApp', [])
  
	var refresh = function() {
		$http.get('/app/user').success(function(response) {
			$scope.user = response;
		});
	};

	refresh();

	$scope.logout = function() {
		$scope.logout = "/";
		$http.get('/app/logout').success(function(response) {
			$scope.user = "";
		});
	}
    
    $scope.listarCurso=function(){
      $http.get('/app/listarCurso/'+$scope.user).success(function(response){
      $scope.cursos=response;
    });
      
    }
    
    $scope.details=function(id){
      if( $('#'+id).is(":visible") ){
        ponerStyleNone();
      }else{
        ponerStyleNone();
        $('#'+id).removeAttr("style");
      }
      
            
    };
  
  var ponerStyleNone=function(){
    var auxiliar=$scope.cursos;
    for(var i=0;i<auxiliar.length;i++){
    $('#'+auxiliar[i]._id).attr('style','display:none');
    }
  };
  
  
    
}]);