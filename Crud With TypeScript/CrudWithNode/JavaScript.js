/// <reference path="c:\users\asad ali\documents\visual studio 2015\Projects\Angular\Angular\angular.js" />

var myModule = angular.module("myModule", []);
myModule.controller("myController", function ($scope) {
    

    
    $scope.students = [];
    $scope.Name = "";
    $scope.Age = "";
    $scope.reqIndex = 0;
    $scope.fromEdit = 0;


    $scope.addData = function () {
        if ($scope.Name.length > 3 && $scope.Age.length > 1) {
            if ($scope.fromEdit == 1) {
                $scope.students[$scope.reqIndex] = { Name: $scope.Name, Age: $scope.Age };
                $scope.fromEdit = 0;
            } else {
                $scope.students.push({ Name: $scope.Name, Age: $scope.Age });
            }
            $scope.Name = "";
            $scope.Age = "";
            alert("Data Saved");
        } else {
            alert("Please Fill Fields Properly");
        }
        
    }

    $scope.deleteRow = function (student, Index) {
        $scope.students.splice(Index, 1);
        if ($scope.students.length <= 0) {
            $scope.backHomeView();
        }
    }
    $scope.editRow = function (student , Index) {
        document.getElementById("addForm").hidden = false;
        document.getElementById("panel").hidden = true;
        document.getElementById("viewAll").hidden = true;
        document.getElementsByName("name")[0].value = student.Name;
        document.getElementsByName("age")[0].value = student.Age;
        $scope.Name = student.Name;
        $scope.Age = student.Age;
        $scope.reqIndex = Index;
        $scope.fromEdit = 1;
    }

    $scope.addNewView = function addNewView() {
        document.getElementById("addForm").hidden = false;
        document.getElementById("panel").hidden = true;
        document.getElementsByName("name")[0].value = "";
        document.getElementsByName("age")[0].value = "";
    }

    $scope.viewAllView = function viewAllView() {
        if ($scope.students.length > 0) {
            document.getElementById("panel").hidden = true;
            document.getElementById("viewAll").hidden = false;
        }
    }

    $scope.backHomeView = function backHomeView() {
        document.getElementById("viewAll").hidden = true;
        document.getElementById("addForm").hidden = true;
        document.getElementById("panel").hidden = false;
    }
     
});