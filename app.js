$(function(){
	$('.entry').focus();
});

var app = angular.module('todo', []);

app.directive('zKeypress', function(){
  return {
    restrict: 'A',
    link: function(scope, elem, attr, ctrl) {
      elem.bind('keypress', function(e){
        if (e.which == 13) {
          scope.$apply(function(s) {
            s.$eval(attr.zKeypress);
          });
        };
      });
    }
  };
});
