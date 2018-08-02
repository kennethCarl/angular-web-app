// Directive that will detect if a datable is done looping the data
app.directive('dtPostRepeatDirective', function($timeout) {
  return function(scope, element, attrs) {
    if (scope.$last)
    { // iteration is complete, do whatever post-processing is necessary
      
		$timeout(function(){
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
		}, 100);
    }
  };
});