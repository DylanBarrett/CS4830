var app = angular.module("BookManager", ['ngAnimate']);

app.controller("myCtrl", function ($scope) {
  $scope.books = [];
  $scope.activetotal = 0;
  $scope.inactivetotal = 0;
  var retrievedBooks = 0;

  if (localStorage.getItem("Books")) {
    retrievedBooks = JSON.parse(localStorage.getItem("Books") || []);
  }
    
$scope.init = function () {
    for (var i = 0; i < retrievedBooks.length; i++) {
      if (retrievedBooks[i].activity === "Active") {
        $scope.activetotal++;
      } else {
        $scope.inactivetotal++;
      }
      $scope.books.push(retrievedBooks[i]);
    }
};

  $scope.addBook = function () {
    var pattern = /^[a-zA-Z\s]+$/;

    if (!$scope.book || !$scope.book.title || !$scope.book.author || !$scope.book.publisher || !$scope.book.edition || !$scope.book.type || !$scope.book.ISBN || !$scope.book.year) {
      $scope.errortext = 'All fields are required';
      return;
    }

    $scope.errortext = "";
    if (!pattern.test($scope.book.title)) {
      console.log("test");
      $scope.errortext = "Title field only accepts letters.";
      return;
    } else if (!pattern.test($scope.book.type)) {
      $scope.errortext = "type field only accepts letters.";
      return;
    }
      
    if ($scope.books.indexOf($scope.book) == -1) {
      if ($scope.book.activity === true) {
        $scope.book.activity = "Active";
        $scope.activetotal++;
      } else {
        $scope.book.activity = "Inactive";
        $scope.inactivetotal++;
      }
      $scope.books.push($scope.book);
      localStorage.setItem("Books", JSON.stringify($scope.books));
    } else {
      $scope.errortext = "This book is already in your system.";
    }
    $scope.book = null;
};
    
$scope.toggleActive = function (obj, data) {
    var i = $scope.books.indexOf(obj);
    if ($scope.books[i].activity === data) {
      return;
    }

    if (data === "Active") {
      $scope.books[i].activity = "Active";
      $scope.inactivetotal--;
      $scope.activetotal++;
    } else {
      $scope.books[i].activity = "Inactive";
      $scope.inactivetotal++;
      $scope.activetotal--;
    }

    localStorage.setItem("Books", JSON.stringify($scope.books));
};
    
$scope.removeItem = function (x) {
    $scope.errortext = "";
    if ($scope.books[x].activity === "Active") {
      $scope.activetotal--;
    } else {
      $scope.inactivetotal--;
    }
    $scope.books.splice(x, 1);
    localStorage.setItem("Books", JSON.stringify($scope.books));
  };
});