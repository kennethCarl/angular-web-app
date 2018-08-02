app.controller("RoomsController", function($scope, $http, $timeout){
	$http({
        method : "GET",
        url : "http://127.0.0.1:8000/api/rooms"
    }).then(function success(response) {
        $scope.rooms = response.data;
    }, function error(response) {
        $scope.myWelcome = response.statusText;
    });
    
   /* $timeout(function(){
    	$(function () {
		    $('.js-basic-example').DataTable({
		        responsive: true
		    });

		    //Exportable table
		    $('.js-exportable').DataTable({
		        dom: 'Bfrtip',
		        responsive: true,
		        buttons: [
		            'copy', 'csv', 'excel', 'pdf', 'print'
		        ]
		    });
		});

      setTimeout(function () { $('.page-loader-wrapper').fadeOut(); }, 50);
  }, 1000);*/
})