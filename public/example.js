'use strict';

var ActionPlans = angular.module('ActionPlans', ["kendo.directives"])
  .controller('ActionPlansController', function($scope) {
    var dataSource11 = new kendo.data.DataSource({
          data: [
            { "ID": 1, "Name": "James" },
            { "ID": 2, "Name": "John" },
            { "ID": 3, "Name": "Jane" },
          ],
          pageSize: 5
        });
                $scope.mainGridOptions = {
                dataSource: dataSource11,
                columns: [{
                    field: "ID",
                    title: "ID",
                    width: "120px"
                    },{
                    field: "Name",
                    title: "Name",
                    width: "120px"
                    }]
            };


                var dataSource12 = new kendo.data.DataSource({
          data: [
            { "ID": 1, "Name": "James2" },
            { "ID": 2, "Name": "John2" },
            { "ID": 3, "Name": "Jane2" },
          ],
          pageSize: 5
        });
                $scope.mainGridOptions2 = {
                dataSource: dataSource12,
                columns: [{
                    field: "ID",
                    title: "ID",
                    width: "120px"
                    },{
                    field: "Name",
                    title: "Name",
                    width: "120px"
                    }]
            };

            $scope.draggableHint = function(element) {
                   // return $("#draggable").clone();
                    return element.clone().addClass("hint");
                }



                 $scope.treeData = {};

        var dataSourcet = new kendo.data.HierarchicalDataSource({
          data: [
            { text: "Star Wars: A New Hope", year: 1977, items: [
              { text: "Mark Hamill", character: "Luke Skywalker" },
              { text: "Harrison Ford", character: "Han Solo" },
              { text: "Carrie Fisher", character: "Princess Leia Organa" }
            ] },
            { text: "Star Wars: The Empire Strikes Back", year: 1980, items: [
              { text: "Mark Hamill", character: "Luke Skywalker" },
              { text: "Harrison Ford", character: "Han Solo" },
              { text: "Carrie Fisher", character: "Princess Leia Organa" },
              { text: "Billy Dee Williams", character: "Lando Calrissian" }
            ] }
          ]
        });

        $scope.treeData.dataSource = dataSourcet;

        $scope.treeData.treeOptions = {
           dragAndDrop: true,
          drag: function(e) {
            if (e.dropTarget.id === 'dropArea') {
              e.setStatusClass('k-add');
            } else {
              e.setStatusClass('k-denied');
            }
          },
          drop: function(e) {
            console.log(e);
            $scope.treeData.dropped = e.sourceNode.textContent;
            $scope.$apply();
            e.preventDefault();
          }
        };
        
        $scope.treeData.dataSource.read();


            $scope.dsData = new kendo.data.DataSource({
              data: [{col1:"test1", col2:'test2'},
                     {col1:"test5", col2:'test3'}
                    ]
            });
      
            $scope.gridOptions = {
              dragAndDrop: true,
              dataSource: $scope.dsData
            };
      
            $scope.fPlaceholder = function(element) {
                return element.clone().addClass("placeholder").text("drop here");
            };
            $scope.fHint = function(element) {
                return element.clone().addClass("hint");
            };

            $scope.onDrop = function (e) {
              console.log('ondrop');
              var uid = e.draggable.currentTarget.data("uid");
            var dataItem = dataSource11.getByUid(e.draggable.currentTarget.data("uid"));
            var dataItemt = e.draggable.currentTarget[0].textContent;
            dataSource11.remove(dataItem);
            dataSource12.add(dataItem);    
              e.draggable.destroy();       
          };

          $scope.removeWorkbook = function(dataItem){
            console.log(dataItem);
          };
    
  });