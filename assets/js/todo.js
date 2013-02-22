function TodoCtrl($scope) {
  localStorage['todos'] === undefined ? $scope.todos = [] : $scope.todos = JSON.parse(localStorage['todos']);
  localStorage['archivedtodos'] === undefined ? $scope.archivedtodos = [] : $scope.archivedtodos = JSON.parse(localStorage['archivedtodos']);
 
  $scope.addTodo = function() {
    localStorage['todoscounter'] === undefined ? nextId = 1 : nextId = localStorage['todoscounter']++;
    var todo = {id:nextId, text:$scope.todoText, done:false};
    $scope.todos.push(todo);
    $scope.todoText = '';
    $scope.setToDoStorage();
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
    localStorage['todos'] = JSON.stringify($scope.todos);
    localStorage['archivedtodos'] = JSON.stringify($scope.archivedtodos);
  };  

  $scope.done = function(todo) {
    if(todo.done) {
      todos = JSON.parse(localStorage['todos']);
      $.each(todos, function(){
        if(this.id == todo.id) {
          this.done = true;
        };
      });
      localStorage['todos'] = JSON.stringify(todos);
    } else{
      todos = JSON.parse(localStorage['todos']);
      $.each(todos, function(){
        if(this.id == todo.id) {
          this.done = false;
        };
      });
      localStorage['todos'] = JSON.stringify(todos);
    };
  };

  $scope.unarchive = function(todo) {
		$scope.todos.push(todo);
    localStorage['todos'] = JSON.stringify($scope.todos);
		$scope.archivedtodos.pop(todo);
    localStorage['archivedtodos'] = JSON.stringify($scope.archivedtodos);
	};

  $scope.deleteArchive = function(todo) {
    $scope.archivedtodos.pop(todo);
    localStorage['archivedtodos'] = JSON.stringify($scope.archivedtodos);
  };

  $scope.setToDoStorage = function() {
    localStorage['todos'] = JSON.stringify($scope.todos);
    localStorage['todoscounter'] === undefined ? localStorage['todoscounter'] = 2 : "";
  };
}