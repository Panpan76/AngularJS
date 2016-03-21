angular.module("servicesApp").controller("servicesController", ["$http", function($http){

  var self = this;
  this.step = 1;
  this.dispoItems = [];
  this.includedItems = [];
  this.selectedDispoItems = [];
  this.selectedIncludedItems = [];

  $http.get('items.json').then(
    function(response){
      self.dispoItems = response.data;
    }, function(response){
      console.log("Error : "+response);
    }
  );

  this.select = function(item){
    console.log(item);
    self.selectedDispoItems.push(item);
  }

  this.addToIncluded = function(){
    angular.forEach(self.selectedDispoItems, function(item, index){
      self.includedItems.push(item);
      self.dispoItems.splice(self.dispoItems.indexOf(item), 1);
    });
    self.selectedDispoItems = [];
  }

  this.addAllToIncluded = function(){
    angular.forEach(self.dispoItems, function(item, index){
      self.includedItems.push(item);
    });
    self.dispoItems = [];
  }

  this.removeFromIncluded = function(){
    angular.forEach(self.selectedIncludedItems, function(item, index){
      self.dispoItems.push(item);
      self.includedItems.splice(self.includedItems.indexOf(item), 1);
    });
    self.selectedIncludedItems = [];
  }

  this.removeAllFromIncluded = function(){
    angular.forEach(self.includedItems, function(item, index){
      self.dispoItems.push(item);
    });
    self.includedItems = [];
  }
}]);
