function TodoCtrl($scope) {
  $scope.todos = [];
  $scope.archivedtodos = [];
  $scope.counter = 1;
 
  $scope.addTodo = function() {
    var nextId = $scope.counter;
    $scope.todos.push({id:nextId, text:$scope.todoText, done:false});
    $scope.todoText = '';
    $scope.counter++;
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
}