function TodoCtrl($scope) {
  localStorage['todos'] === undefined ? $scope.todos = [] : $scope.todos = JSON.parse(localStorage['todos']);
  $scope.archivedtodos = [];
 
  $scope.addTodo = function() {
    localStorage['todoscounter'] === undefined ? nextId = 1 : nextId = localStorage['todoscounter']++;
    var todo = {id:nextId, text:$scope.todoText, done:false};
    $scope.todos.push(todo);
    $scope.todoText = '';
    $scope.setStorage();
    return false;
  };
 
  $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.todos, function(todo) {
      count += todo.done ? 0 : 1;
    });
    return count;
  };
 
  $scope.archive = function() {
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function(todo) {
      if (!todo.done) {
				$scope.todos.push(todo);
      } else {
				$scope.archivedtodos.push(todo);
      }
    });
  };  

  $scope.unarchive = function(todo) {
		$scope.todos.push(todo);
		$scope.archivedtodos.pop(todo);
	};

  $scope.deleteArchive = function(todo) {
    $scope.archivedtodos.pop(todo);
  };

  $scope.setStorage = function() {
    localStorage['todos'] = JSON.stringify($scope.todos);
    localStorage['todoscounter'] === undefined ? localStorage['todoscounter'] = 2 : "";
  };
}