var app = angular.module("toDoApp", ["ngRoute"])

.controller("ToDoController", function ($scope) {
    $scope.toDos = [
        { text: "Learn Java", done: true },
        { text: "Apply for jobs", done: false }];

    $scope.remaining = function () {
        var count = 0;
        angular.forEach($scope.toDos, function (toDo) {
            count += toDo.done ? 0 : 1;
        });
        return count;
    };

    $scope.addToDo = function () {
        $scope.toDos.push({ text: $scope.toDo.text, done: false });
        $scope.toDo.text = "";
    };

    $scope.archive = function() {
    	var oldToDos = $scope.toDos;
    	$scope.toDos = [];
		angular.forEach(oldToDos, function(toDo){
			if(!toDo.done){
				$scope.toDos.push(toDo);
			}
		})
    }

});