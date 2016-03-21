angular.module("servicesApp").controller("servicesController", ["$http", function($http){

  var self = this;
  this.contacts = [
    {
      'nom': 'ZUCKERBERG',
      'prenom': 'mark',
      'mail': 'mark@facebook.com',
      'deleted': false
    },
    {
      'nom': 'GATES',
      'prenom': 'bill',
      'mail': 'bill@microsft.com',
      'deleted': false
    },
    {
      'nom': 'JOBS',
      'prenom': 'steeve',
      'mail': 'Steeve@apple.com',
      'deleted': false
    }
  ];
  this.contact;
  this.tmpContact;
  this.operation;
  this.edit = false;
  this.titreModif;

  this.toUpdate = function(contact){
    self.contact = contact;
    self.titreModif = 'Modifier';
    self.edit = true;
  };

  this.toAdd = function(){

  };

  this.add = function(){
    self.contact.deleted = false;
    self.contacts.push(self.contact);
    self.contact = null;
    self.edit = null;
  };

  this.update = function(){

  };

  this.delete = function(contact){
    angular.forEach(self.contacts, function(value, key){
      if(value == contact){
        value.deleted = true;
        //self.contacts.splice(self.contacts.indexOf(contact), 1);
      }
    });
    self.edit = false;
    self.contact = null;
  };

  this.notDeleted = function(){
    c = [];
    angular.forEach(self.contacts, function(value, key){
      if(value.deleted == false){
        c.push(value);
      }
    });
    return c;
  }

  this.restaure = function(){
    angular.forEach(self.contacts, function(value, key){
      value.deleted = false;
    });
  }

  this.confirmSuppr = function(){
    angular.forEach(self.contacts, function(value, key){
      if(value.deleted == true){
        self.contacts.splice(self.contacts.indexOf(value), 1);
      }
    });
  }
}]);
